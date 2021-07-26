<template>
  <div class="subdetaillist" v-if="Object.keys(sublist)">
    <a :href="sublist.link">
      <img :src="sublist.image" alt="" />
    </a>
    <i>{{ sublist.title }}</i>
  </div>
</template>

<script>
export default {
  name: "SubDetailList",
  props: {
    sublist: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.subdetaillist {
  /*flex: 1;*/
  /*height: 40px;*/
  width: 33%;
  padding: 4px 5px 10px 5px;
}
.subdetaillist a img {
  width: 100%;
}
</style>
