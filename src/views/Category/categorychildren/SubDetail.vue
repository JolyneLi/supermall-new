<template>
  <div class="subdetail" v-if="Object.keys(shangdata).length !== 0">
    <sub-detail-list
      v-for="(item, index) in shangdata.list"
      :key="index"
      :sublist="item"
    >
    </sub-detail-list>
  </div>
</template>

<script>
import SubDetailList from "./SubDetailList";
export default {
  name: "SubDetail",
  components: {
    SubDetailList,
  },
  props: {
    shangdata: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.subdetail {
  display: flex;
  flex-flow: wrap;
  width: 100%;
  padding: 2px;
  margin-left: 6px;
}
</style>
