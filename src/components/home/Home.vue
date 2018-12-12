<template>
  <div>
    <graphic :imageURLs="imageURLs" :transitionTime="5"></graphic>
  </div>
</template>

<script>
import Graphic from "./Graphic";

export default {
  name: "Home",
  components: { Graphic },
  data() {
    return {
      imageURLs: [
        "https://i.imgur.com/NNoFNWf.png",
        "https://i.imgur.com/VW2DYbL.png",
        "https://i.imgur.com/UZKEjzG.png",
        "https://i.imgur.com/6EhAM7G.png",
        "https://i.imgur.com/QOfZ5r8.png",
        "https://i.imgur.com/Y4BHWJM.png",
        "https://i.imgur.com/laSSeYN.png",
        "https://i.imgur.com/HaYuGQi.png"
      ]
    };
  }
};
</script>

<style scoped>
.graphic {
  height: 100px;
}
</style>
