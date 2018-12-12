<template>
  <div id="news" class="md-layout md-gutter">
    <div class="md-display-2 md-layout-item md-size-100">News</div>
    <news-article
      v-for="(news, i) in newsData"
      :key="i"
      :newsData="news"
      class="md-layout-item md-size-33"
    ></news-article>
  </div>
</template>

<script>
import NewsArticle from "./NewsArticle";

export default {
  name: "News",
  components: { NewsArticle },
  data() {
    return {
      newsData: []
    };
  },
  created() {
    fetch("http://localhost:3000/news")
      .then(res => res.json())
      .then(data => (this.newsData = data));
  }
};
</script>

<style scoped>
#news {
  margin: 32px 0;
}
</style>
