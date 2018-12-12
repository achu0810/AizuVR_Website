<template>
  <div>
    <md-card>
      <md-card-media>
        <img :src="newsData.image">
      </md-card-media>
      <md-card-header>
        <div class="md-subhead">{{ newsData.date }}</div>
        <div class="md-title">{{ newsData.content }}</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "NewsArticle",
  props: {
    newsData: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.md-card-header {
  text-align: left;
}
</style>
