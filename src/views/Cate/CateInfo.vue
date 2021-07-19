<template>
  <div id="info">
    <cate-info-list
      v-for="(item, index) in showCartlist"
      :key="index"
      :item="item"
    ></cate-info-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CateInfoList from "./CateInfoList";
export default {
  name: "CateInfo",
  components: {
    CateInfoList,
  },
  computed: {
    ...mapGetters(["showCartlist"]),
  },
};
</script>

<style scoped></style>
