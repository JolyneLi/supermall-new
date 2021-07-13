<template>
  <div id="detail">
    <detail-navbar class="navbar"></detail-navbar>
    <in-scroll class="content">
      <detail-swiper :swiperdata="swiperdata"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-shop :shop="shop"></detail-shop>
    </in-scroll>
  </div>
</template>

<script>
import DetailGoods from "./DetailGoods";
import { detailApi, Goods, Shop } from "network/detail/detail";
import DetailSwiper from "./DetailSwiper";
import DetailNavbar from "./DetailNavbar";
import DetailShop from "./DetailShop";
import InScroll from "../../components/content/InScroll";
export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    InScroll,
  },
  data() {
    return {
      iid: null,
      swiperdata: [],
      goods: null,
      shop: {},
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
        this.swiperdata = res.result.itemInfo.topImages;
        console.log(res.result.shopInfo);
        this.goods = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        );
        this.shop = new Shop(res.result.shopInfo);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
/*.navbar{*/
/*  */
/*}*/
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
