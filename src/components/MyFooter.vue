<template>
  <footer class="md-layout">
    <ul class="md-layout md-alignment-center-left">
      <li class="footer-item">サイトポリシー</li>
    </ul>
    <ul class="md-layout md-alignment-center-right">
      <li class="footer-item">
        <a href="https://twitter.com/Aizu_vr?lang=ja">
          <md-icon class="fa fa-twitter"></md-icon>
        </a>
      </li>
      <li class="footer-item">
        <a href="https://www.youtube.com/channel/UC5vFnELK-dnsn_nnvsIaQ7w?view_as=subscriber">
          <md-icon class="fa fa-youtube"></md-icon>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "MyFooter"
};
</script>


<style scoped>
footer {
  padding: 50px;
  background: var(--md-theme-default-primary);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
}

ul {
  list-style: none;
}

a {
  color: black;
}
</style>