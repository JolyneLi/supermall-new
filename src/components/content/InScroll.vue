<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import ObserveDom from "@better-scroll/observe-dom";
Bscroll.use(ObserveDom);

export default {
  name: "InScroll",
  props: {
    // 需不需要监听滚动
    activeprobetype: {
      type: Number,
      default: 0,
    },
    // 需不需要上拉加载更多
    ActiveUpLoad: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      bs: "",
      mes: "你好",
    };
  },

  // this.bs.on("scroll", (position) => {
  //   // position 应该在各个组件使用并且打印
  //   console.log(position);
  //   // this.$emit("escroll",position)
  // });

  mounted() {
    // setTimeout(() => {
    //
    // }, 100);

    // this.initScroll();
    this.bs = new Bscroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.activeprobetype,
      pullUpLoad: this.ActiveUpLoad,
    });
    // 监听屏幕的实时滚动
    this.bs.on("scroll", (position) => {
      // position 应该在各个组件使用并且打印
      // console.log(position);
      this.$emit("escroll", position);
    });
    // 上拉事件
    this.bs.on("pullingUp", () => {
      // console.log("上拉");
      this.$emit("pullingUp");
    });
  },
  updated() {},
  methods: {
    // initScroll() {
    //
    // },
    scrollTo(x, y, time) {
      this.bs.scrollTo(x, y, time);
      // console.log(this.bs.scrollTo)
    },
    refresh() {
      // console.log("次数");
      this.bs.refresh();
      // console.log(this.bs.refresh)
    },
  },
};
</script>

<style scoped>
.wrapper {
}
</style>
