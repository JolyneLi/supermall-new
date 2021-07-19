<template>
  <div id="cate">
    <nav-bar class="catenav">
      <div slot="mid">购物车({{ showCartlength }})</div>
    </nav-bar>
    <in-scroll class="content" ref="scrollRef">
      <cate-info />
    </in-scroll>
    <cate-money></cate-money>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import InScroll from "../../components/content/InScroll";
import { mapGetters } from "vuex";

import CateInfo from "./CateInfo";
import CateMoney from "./CateMoney";

export default {
  name: "Cate",
  components: {
    NavBar,
    InScroll,

    CateInfo,
    CateMoney,
  },
  activated() {
    this.$refs.scrollRef.refresh();
  },
  mounted() {},
  computed: {
    ...mapGetters(["showCartlength"]),
  },
};
</script>

<style scoped>
#cate {
  height: 100vh;
  background-color: #f0f0f0;
}
.catenav {
  background-color: #e7e1e3;
  font-weight: 600;
  font-size: 16px;
}
.content {
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>
