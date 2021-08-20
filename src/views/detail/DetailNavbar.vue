<template>
  <div class="detail">
    <nav-bar>
      <div slot="left" class="icon-fanhui" @click="back"></div>
      <div slot="mid" class="aaa">
        <div
          v-for="(item, i) in navdata"
          :key="i"
          @click="navdatabotton(i)"
          :class="{ avtiveclass: count == i }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  components: {
    NavBar,
  },
  data() {
    return {
      navdata: ["商品", "参数", "评论", "推荐"],
      count: 0,
    };
  },
  methods: {
    back() {
      this.$router.back("/home");
    },
    navdatabotton(i) {
      this.count = i;
      this.$emit("navdatabotton", i);
    },
  },
};
</script>

<style scoped>
.aaa {
  display: flex;
}
.aaa div {
  flex: 1;
}
.avtiveclass {
  color: #ff8198;
}
</style>
