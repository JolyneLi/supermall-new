<template>
  <div class="goodslist">
    <fater-list
      v-for="(item, i) in goodlistdata"
      :key="i"
      :obj="item"
    ></fater-list>
  </div>
</template>

<script>
import FaterList from "./FaterList";
export default {
  name: "",
  components: {
    FaterList,
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
  width: 100%;
  padding: 2px;
  margin-left: 7px;
}
</style>
