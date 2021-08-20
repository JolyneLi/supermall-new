<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="mid">购物街</div></nav-bar>
    <select-control
      :selectdata="['流行', '新品', '精选']"
      @selecti="selecti"
      class="selectcontrol"
      v-show="aaa"
      ref="topselectRef"
    ></select-control>

    <in-scroll
      class="incontent"
      ref="iscroll"
      @escroll="escroll"
      :activeprobetype="2"
      :active-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperimgload="swiperimgload"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-popular></home-popular>
      <select-control
        :selectdata="['流行', '新品', '精选']"
        @selecti="selecti"
        ref="selectRef"
      ></select-control>
      <goods-list :goodlistdata="goods[mycount].list"></goods-list>
    </in-scroll>

    <!--// 监听组件的根元素的原生事件,组件无法-->
    <Topicon
      class="itop"
      @click.native="topbotton"
      v-show="isTopicon"
    ></Topicon>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SelectControl from "../../components/content/SelectControl";
import GoodsList from "../../components/content/GoodsList";
import InScroll from "../../components/content/InScroll";
// import Topicon from "../../components/content/Topicon";
import { debounce } from "components/common/utils.js";

import HomeSwiper from "./homechild/HomeSwiper";
import HomeRecommend from "./homechild/HomeRecommend";
import HomePopular from "./homechild/HomePopular";

import { getHomedata, getHomeGoodsApi } from "../../network/home/home";

import { backTop } from "components/content/mixin";

// import BScroll from "better-scroll";

export default {
  name: "Home",
  mixins: [backTop],
  components: {
    NavBar,
    SelectControl,
    GoodsList,
    InScroll,
    // Topicon,

    HomeSwiper,
    HomeRecommend,
    HomePopular,
  },
  data() {
    return {
      banner: [],
      dkeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      mycount: "pop",
      arr: ["pop", "new", "sell"],
      ts: null,
      // isTopicon: false,
      selectoffsettop: 0,
      aaa: "",
      b: "",
      // 离开home后 goodslist不需要在刷新了 取消刷新
      homeimgleave: null,
    };
  },

  created() {
    getHomedata().then((res) => {
      // console.log(res);
      this.banner = res.data.banner.list;
      // this.dkeyword = res.data.dkeyword.list;
      // this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
      // console.log(this.banner)
    });

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 调用次数过多 性能降低  使用防抖函数
    // this.$refs.iscroll.bs.refresh()
    const refresh = debounce(this.$refs.iscroll.refresh, 100);
    this.homeimgleave = () => {
      refresh();
    };
    this.$bus.$on("imgloadend", this.homeimgleave);
  },
  activated() {
    /*
     * 先刷新
     *
     * */
    this.$refs.iscroll.refresh();
    // 保持原来的位置
    this.$refs.iscroll.scrollTo(0, this.b, 0);
  },
  deactivated() {
    // bs实例的y属性
    this.b = this.$refs.iscroll.bs.y;

    // 离开home时，取消对事件总线的监听
    // this.$bus.$off("imgloadend",函数)
    this.$bus.$off("imgloadend", this.homeimgleave);
  },
  updated() {},
  methods: {
    getHomeGoods(type) {
      const index = this.goods[type].page + 1;
      getHomeGoodsApi(type, index).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type].page);
        this.goods[type].page += 1;
      });
    },
    selecti(i) {
      // console.log(typeof i);
      this.mycount = this.arr[i];
      // ***********************************************************
      this.$refs.topselectRef.count = i;
      this.$refs.selectRef.count = i;
      // ***********************************************************
      // console.log(this.mycount)
      // switch (i) {
      //   case 0:
      //     this.mycount = "pop"
      //     break
      //   case 1:
      //     this.mycount = "new"
      //     break
      //   case 2:
      //     this.mycount = "sell"
      //     break
      // }
    },
    topbotton() {
      this.$refs.iscroll.scrollTo(0, 0, 500);
    },
    // 监听屏幕的滚动
    escroll(position) {
      this.isTopicon = -position.y > 1000;

      this.aaa = -position.y > this.selectoffsettop;
    },
    loadMore() {
      this.getHomeGoods(this.mycount);
      this.$refs.iscroll.bs.finishPullUp();
    },

    swiperimgload() {
      // console.log(this.$refs.selectRef.$el);
      // 轮播图图片加载完成load 传入自定义事件swiperimgload  home组件接受 拿到选择框的dom节点（$el） 得到最终的高度
      // console.log(this.$refs.selectRef.$el.offsetTop);
      this.selectoffsettop = this.$refs.selectRef.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  /*position: relative;*/
}
.incontent {
  /*子绝父相 设置weapper的高度 定义视口高度为100vh 将此区域定位到中间*/
  /*height: 400px;*/
  /*border: 1px solid red;*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
}

/*在使用浏览器的原生滚动时，为了不让导航跟他一起滚动*/
/*.home-nav {*/
/*  position: fixed;*/
/*  left: 0;*/
/*  right: 0;*/
/*  top: 0;*/
/*  z-index: 9;*/
/*}*/

.home-nav {
  background-color: lightpink;
  font-size: 18px;
  color: white;
}

.itop {
  position: absolute;
  right: 15px;
  bottom: 60px;
  z-index: 1;
}
.selectcontrol {
  position: relative;
  z-index: 1;
}
</style>
