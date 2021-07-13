<template>
  <Swiper class="detailswiper">
    <swiper-item v-for="(item, i) in swiperdata" :key="i">
      <img :src="item" alt="" />
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    swiperdata: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.detailswiper {
  height: 300px;
}
</style>
