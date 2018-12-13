<template>
  <div class="contents">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">お問い合わせ</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">名字</label>
                <md-input
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="form.firstName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.firstName.required">必須項目です</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">必須項目です</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">名前</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="form.lastName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.lastName.required">必須項目です</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">必須項目です</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('fHurigana')">
                <label for="f-Hurigana">みょうじ</label>
                <md-input
                  name="f-Hurigana"
                  id="f-Hurigana"
                  autocomplete="given-fname"
                  v-model="form.fHurigana"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.fHurigana.required">必須項目です</span>
                <span class="md-error" v-else-if="!$v.form.fHurigana.minlength">必須項目です</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lHurigana')">
                <label for="l-Hurigana">なまえ</label>
                <md-input
                  name="l-Hurigana"
                  id="l-Hurigana"
                  autocomplete="family-fname"
                  v-model="form.lHurigana"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.lHurigana.required">必須項目です</span>
                <span class="md-error" v-else-if="!$v.form.lHurigana.minlength">必須項目です</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required">必須項目です</span>
            <span class="md-error" v-else-if="!$v.form.email.email">必須項目です</span>
          </md-field>

          <md-field :class="getValidationClass('job')">
            <label for="job">職業</label>
            <md-input
              type="job"
              name="job"
              id="job"
              autocomplete="job"
              v-model="form.job"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.job.required">必須項目です</span>
            <span class="md-error" v-else-if="!$v.form.job.minLength">必須項目です</span>
          </md-field>

          <md-field>
            <label>本文</label>
            <md-textarea v-model="textarea"></md-textarea>
            <span class="md-error" v-if="!$v.form.text.required">1文字以上書いてください</span>
            <span class="md-error" v-else-if="!$v.form.text.minLength">1文字以上書いてください</span>
          </md-field>
        </md-card-content>

        <div class="privacypolicy">
          <p>「個人情報取り扱いについて」</p>
          <md-content class="md-scrollbar">
            <p>【利用目的について】</p>
            <p>ご入力いただいた内容は、お問合せ内容にお答えする目的で取得し、目的以外での利用をすることはありません。</p>
            <p>【第三者への提供について】</p>
            <p>収集した個人情報をご本人の同意がある場合を除いて、いかなる第三者にも提供または開示いたしません。</p>
            <p>【サイト等のセキュリティについて】</p>
            <p>個人情報の管理にあたり相当の注意を尽くしますが、個人情報の秘密性を完全に保証することはできません。この点に留意してウェブサイトおよび電子メールをご利用ください。</p>
            <p>【改定について】</p>
            <p>「個人情報の取り扱いについて」は、関連する法令等の改正や当社の方針の変更等により予告なく変更する場合があります。</p>
          </md-content>
          <br>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}確認し、同意します。</label>
        </div>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">送信する</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "ScrollbarExample",
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      fHurigana: null,
      lHurigana: null,
      email: null
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(1)
      },
      lastName: {
        required,
        minLength: minLength(1)
      },
      fHurigana: {
        required,
        minLength: minLength(1)
      },
      lHurigana: {
        required,
        minLength: minLength(1)
      },
      email: {
        required,
        email
      },
      job: {
        required,
        minLength: minLength(1)
      },
      text: {
        required,
        minLength: minLength(1)
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.fHurigana = null;
      this.form.lHurigana = null;
      this.form.email = null;
      this.form.job = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style>

.contnts{
     margin:  0 auto;
}

.md-content {
  max-width: 400px;
  max-height: 200px;
  overflow: auto;
}

.privacypolicy{
    width: 1000px;
    padding: 0 100px;
}

</style>
