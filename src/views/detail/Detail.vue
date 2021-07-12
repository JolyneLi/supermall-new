<template>
  <div>
    <detail-navbar></detail-navbar>
  </div>
</template>

<script>
import DetailNavbar from "./DetailNavbar";
import { detailApi } from "network/detail/detail";
export default {
  name: "Detail",
  components: {
    DetailNavbar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  mounted() {
    this.getDetail(this.iid);
  },
  methods: {
    getDetail(k) {
      detailApi(k).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
