<template>
  <div class="header">
    <md-toolbar class="md-primary" md-elevation="1">
      <a href="/#/"><img src="../assets/vrlogo.png" height="50px" width="120px"></a>
      <h3 class="md-img" style="flex: 1"></h3>
      <md-menu　md-size="medium" md-align-trigger>
        <md-button md-menu-trigger class="menu1">about</md-button>
        <md-menu-content>
          <md-menu-item href="/#/info">VR部とは</md-menu-item>
          <md-menu-item href="/#/history">沿革</md-menu-item>
          <md-menu-item href="/#/departmentform">形態</md-menu-item>
        </md-menu-content>
      </md-menu>
      <md-button class="menu2">members</md-button>
      <md-button class="menu3">product</md-button>
      <md-button class="menu4">contacts</md-button>
      <md-button href="http://aizu-vr.hatenablog.com/" class="menu5">blog</md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  name: 'MenuAlignments'
};
</script>