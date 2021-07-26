<template>
  <tab-bar>
    <!--    activeColor="blue"-->
    <tab-bar-item path="/home">
      <span class="icon-yemian" slot="icon"></span>
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <span class="icon-leimupinleifenleileibie2" slot="icon"></span>
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cate">
      <span class="icon-qicheqianlian-select-copy" slot="icon"></span>
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <span class="icon-wodedangxuan" slot="icon"></span>
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabber/TabBar";
import TabBarItem from "../common/tabber/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.icon-qicheqianlian-select-copy {
  font-size: 20px;
}
</style>
