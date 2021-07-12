<template>
  <div class="goodslist">
    <goods-list-item
      v-for="(item, i) in goodlistdata"
      :key="i"
      :obj="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "",
  components: {
    GoodsListItem,
  },
  props: {
    goodlistdata: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-flow: wrap;
  /*justify-content: space-between;*/
  padding: 2px;
}
</style>
