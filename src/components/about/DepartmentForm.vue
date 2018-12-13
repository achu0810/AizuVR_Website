<template>
    <div class="department">
        <div class="main-form">
            <h1>
                部内形態
            </h1>
            <br>
            <md-tabs class="md-transparent" md-alignment="fixed">
                <md-tab id="tab-home" md-label="ゲーム部">
                    <h2><span style="color: red">ゲ</span><span style="color: orange">ー</span><span style="color: green">ム</span><span style="color: blue">部</span></h2>
                </md-tab>

                <md-tab id="tab-pages" md-label="新規開発部">
                    <h2><span style="color: #3b658b">新規開発部</span></h2>
                </md-tab>

                <md-tab id="tab-posts" md-label="IVRC部">
                    <h2><span style="color: #84cdf2">IV</span><span style="color: #dd5034">RC部</span></h2>
                </md-tab>
            </md-tabs>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DepartmentForm'
  }
</script>

<style scoped>
.department {
    padding: 50px;
}
</style>