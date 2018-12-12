<template>
  <div>
    <md-content>
      <transition-group tag="figure" name="graphic">
        <img v-for="url in imageURLs" :key="url" :src="url" v-if="imageURL == url">
      </transition-group>
    </md-content>
    <md-icon>menu</md-icon>
  </div>
</template>

<script>
export default {
  name: "Graphic",
  props: {
    imageURLs: Array,
    transitionTime: Number
  },
  data() {
    return {
      intervalID: undefined,
      imageURL: ""
    };
  },
  created() {
    if (this.imageURLs == undefined) return;
    this.imageURL = this.imageURLs[0];
    this.intervalID = setInterval(
      (() => {
        let n = 1;
        return () => {
          this.imageURL = this.imageURLs[n % this.imageURLs.length];
          n++;
        };
      })(),
      (this.transitionTime || 5) * 1000
    );
  }
};
</script>

<style scoped>
.md-content {
  width: 100%;
  height: auto;
  margin: 0;
}

figure {
  position: relative;
  opacity: 1;
  margin: 0;
}

.graphic-enter-active,
.graphic-leave-active {
  transition: opacity 1s ease;
}

.graphic-enter,
.graphic-leave-to {
  opacity: 0;
}

.graphic-leave-to {
  position: absolute;
  top: 0;
  left: 0;
}
</style>


