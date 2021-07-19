<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tabbar v-if="$route.meta.footShow" />
  </div>
</template>

<script>
import MainTabbar from "./components/content/MainTabbar";
export default {
  components: {
    MainTabbar,
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
@import "./assets/font/iconfont.css";
</style>
