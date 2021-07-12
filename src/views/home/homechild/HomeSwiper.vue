<template>
  <swiper>
    <swiper-item v-for="(item, i) in banner" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperimgload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banner: {
      type: Array,
      // 参数是Object或者Array类型，则defalut这里应该用一个函数返回
      default: () => [],
    },
  },
  data() {
    return {
      isbool: false,
    };
  },
  methods: {
    swiperimgload() {
      if (!this.isbool) {
        this.$emit("swiperimgload");
        this.isbool = true;
      }
    },
  },
};
</script>

<style scoped></style>
