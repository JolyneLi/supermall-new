<template>
  <div id="detail">
    <detail-navbar
      class="navbar"
      @navdatabotton="navdatabottons"
      ref="nav"
    ></detail-navbar>
    <in-scroll class="content" ref="scrollRef" @escroll="detailescroll">
      <detail-swiper :swiperdata="swiperdata"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-shop :shop="shop"></detail-shop>
      <detail-img
        :imm="detailimginfo"
        @detailimglod="detailimglods"
      ></detail-img>
      <detail-size-params
        :sizeparams="sizeparams"
        ref="sizeRef"
      ></detail-size-params>
      <detail-comment
        :commentdata="commentdata"
        :commentdataobj="commentdataobj"
        ref="commentRef"
      />
      <!--      <detail-recommend />-->
      <goods-list :goodlistdata="recommendlist" ref="recommenRef"></goods-list>
    </in-scroll>
  </div>
</template>

<script>
import DetailGoods from "./DetailGoods";
import { detailApi, Goods, Shop } from "network/detail/detail";
import { getRecommendApi } from "../../network/detail/detail";
import DetailSwiper from "./DetailSwiper";
import DetailNavbar from "./DetailNavbar";
import DetailShop from "./DetailShop";
import InScroll from "../../components/content/InScroll";
import DetailImg from "./DetailImg";
import DetailSizeParams from "./DetailSizeParams";
import DetailComment from "./DetailComment";
// import DetailRecommend from "./DetailRecommend";
import GoodsList from "../../components/content/GoodsList";
import { debounce } from "components/common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    InScroll,
    DetailImg,
    DetailSizeParams,
    DetailComment,
    // DetailRecommend,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      swiperdata: [],
      goods: null,
      shop: {},
      detailimginfo: {},
      sizeparams: {},
      commentdata: [],
      commentdataobj: {},
      recommendlist: [],
      navbarlocation: [],
      // 离开home后 goodslist不需要在刷新了 取消刷新
      homeimgleave: null,
      newrefresh: null,
      arr: [0, 1, 2, 3],
      currentindex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  mounted() {
    this.getDetail(this.iid);
    this.getRecommend();

    this.newrefresh = debounce(this.$refs.scrollRef.refresh, 100);
    this.homeimgleave = () => {
      this.newrefresh();
    };
    this.$bus.$on("imgloadend", this.homeimgleave);
    // this.$bus.$on("imgloadend", ()=>{
    //   this.navbarlocation.push(this.$refs.recommenRef.$el.offsetTop)
    // });
  },
  updated() {},
  destroyed() {
    this.$bus.$off("imgloadend", this.homeimgleave);
  },
  methods: {
    getDetail(k) {
      detailApi(k).then((res) => {
        console.log(res);
        this.swiperdata = res.result.itemInfo.topImages;
        this.goods = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        );
        this.shop = new Shop(res.result.shopInfo);

        this.detailimginfo = res.result.detailInfo;

        this.sizeparams = res.result.itemParams;

        // cRate为0，则无评论 保证有评论可以获取
        if (res.result.rate.cRate !== 0) {
          this.commentdataobj = res.result.rate.list[0];
          this.commentdata = res.result.rate.list;
        }
      });
      // 父组件请求数据并赋值，传入子组件，子组件也得到数据
      // 但是dom渲染还需要一段时间，在这期间使用#el是没有用的
      // 在dom渲染完之后会回来调用nextTick中的回调函数
      // offsetTop不对 一般都是图片不对
      // this.$nextTick(() => {
      //   this.navbarlocation = [];
      //   this.navbarlocation.push(0);
      //   this.navbarlocation.push(this.$refs.sizeRef.$el.offsetTop);
      //   this.navbarlocation.push(this.$refs.commentRef.$el.offsetTop);
      //   this.navbarlocation.push(this.$refs.recommenRef.$el.offsetTop);
      //   console.log(this.navbarlocation);
      // });
    },
    getRecommend() {
      getRecommendApi().then((res) => {
        this.recommendlist = res.data.list;
      });
    },
    navdatabottons(i) {
      switch (i) {
        case 0:
          this.$refs.scrollRef.scrollTo(0, 0, 500);
          break;
        case 1:
          this.$refs.scrollRef.scrollTo(
            0,
            -this.$refs.sizeRef.$el.offsetTop,
            500
          );
          break;
        case 2:
          this.$refs.scrollRef.scrollTo(
            0,
            -this.$refs.commentRef.$el.offsetTop,
            500
          );
          break;
        case 3:
          this.$refs.scrollRef.scrollTo(
            0,
            -this.$refs.recommenRef.$el.offsetTop,
            500
          );
          break;
      }
      // this.$refs.scrollRef.scrollTo(0, -this.navbarlocation[i], 500);
    },
    // 详情页商品图片加载完成返回的事件
    detailimglods() {
      this.newrefresh();
      //
      // this.navbarlocation = [];
      // this.navbarlocation.push(0);
      // this.navbarlocation.push(this.$refs.sizeRef.$el.offsetTop);
      // this.navbarlocation.push(this.$refs.commentRef.$el.offsetTop);
      // this.navbarlocation.push(this.$refs.recommenRef.$el.offsetTop)
      // console.log(this.navbarlocation);
    },
    detailescroll(position) {
      let y = -position.y;
      if (
        this.currentindex !== 0 &&
        y > 0 &&
        y < this.$refs.sizeRef.$el.offsetTop
      ) {
        this.currentindex = 0;
        this.$refs.nav.count = this.currentindex;
        // console.log(0);
      } else if (
        this.currentindex !== 1 &&
        y > this.$refs.sizeRef.$el.offsetTop &&
        y < this.$refs.commentRef.$el.offsetTop
      ) {
        this.currentindex = 1;
        this.$refs.nav.count = this.currentindex;
        // console.log(1);
      } else if (
        this.currentindex !== 2 &&
        y > this.$refs.commentRef.$el.offsetTop &&
        y < this.$refs.recommenRef.$el.offsetTop
      ) {
        this.currentindex = 2;
        this.$refs.nav.count = this.currentindex;
        // console.log(2);
      } else if (
        this.currentindex !== 3 &&
        y > this.$refs.recommenRef.$el.offsetTop
      ) {
        this.currentindex = 3;
        this.$refs.nav.count = this.currentindex;
        // console.log(3);
      }
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
