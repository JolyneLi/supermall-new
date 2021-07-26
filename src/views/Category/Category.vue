<template>
  <div id="category">
    <nav-bar class="navbar">
      <template v-slot:mid> 产品分类 </template>
    </nav-bar>
    <div class="content">
      <!--      左侧-->
      <side-msg :category="category" @clickitem="clickitem"></side-msg>
      <!--      右侧-->
      <in-scroll
        class="scroll"
        :activeprobetype="2"
        ref="scrollRef"
        @escroll="escroll"
      >
        <div class="scroll1">
          <sub-detail :shangdata="showSubcategory"></sub-detail>
          <select-control
            :selectdata="['综合', '新品', '销量']"
            @selecti="selecti"
          ></select-control>
          <fater :goodlistdata="showcategoryDetail"></fater>
        </div>
      </in-scroll>
    </div>
    <topicon class="itop" v-show="isShow" @click.native="backtop"></topicon>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import InScroll from "../../components/content/InScroll";

import SideMsg from "./categorychildren/SideMsg";
import SubDetail from "./categorychildren/SubDetail";
import SelectControl from "../../components/content/SelectControl";
// import GoodsList from "../../components/content/GoodsList";
import Fater from "./categorychildren/Fater";
import Topicon from "../../components/content/Topicon";
import {
  getcategoryApi,
  getSubcategoriesApi,
  getcategoryDetailApi,
} from "../../network/category/category";

export default {
  name: "Category",
  components: {
    NavBar,
    InScroll,
    SideMsg,
    SubDetail,
    SelectControl,
    Fater,
    Topicon,
    // GoodsList,
  },
  data() {
    return {
      // 请求侧边的数据数组
      category: [],
      // 每项侧边栏对应的数据
      categorydata: {},
      currentindex: -1,
      mycount: "pop",
      isShow: false,
    };
  },
  created() {
    // 获取分类数据
    this.getcategory();
  },
  mounted() {
    // this.$refs.scrollRef.bs.
  },
  computed: {
    showSubcategory() {
      if (this.currentindex === -1) return {};
      return this.categorydata[this.currentindex].subcategories;
    },
    showcategoryDetail() {
      if (this.currentindex === -1) return [];
      return this.categorydata[this.currentindex].categoryDetail[this.mycount];
    },
  },
  methods: {
    getcategory() {
      getcategoryApi().then((res) => {
        // console.log(res);
        this.category = res.data.category.list;
        for (let i = 0; i < this.category.length; i++) {
          this.categorydata[i] = {
            // 上半部分数据
            subcategories: {},
            // 下部分数据
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this._getSubcategories(0);
      });
    },
    // 侧边栏上部分数据请求
    _getSubcategories(index) {
      this.currentindex = index;
      const maitKey = this.category[this.currentindex].maitKey;
      getSubcategoriesApi(maitKey).then((res) => {
        console.log(res);
        this.categorydata[this.currentindex].subcategories = res.data;
        console.log(this.categorydata[this.currentindex].subcategories);
        // this.$set(this.categorydata,'subcategories',res.data)
        this.categorydata = { ...this.categorydata };
        this._getcategoryDetail("pop");
        this._getcategoryDetail("new");
        this._getcategoryDetail("sell");
      });
    },
    // 侧边栏下部分数据请求
    _getcategoryDetail(type) {
      // this.currentindex = index
      const miniWallkey = this.category[this.currentindex].miniWallkey;
      getcategoryDetailApi(miniWallkey, type).then((res) => {
        console.log(res);
        this.$set(
          this.categorydata[this.currentindex].categoryDetail,
          [type],
          res
        );

        // this.categorydata[this.currentindex].categoryDetail[type].push(...res)

        // this.categorydata[this.currentindex].categoryDetail[type] = res;
        // this.categorydata = { ...this.categorydata };
      });
    },
    clickitem(i) {
      this._getSubcategories(i);
    },
    selecti(i) {
      console.log(i);
      switch (i) {
        case 0:
          this.mycount = "pop";
          console.log("这是pop的数据：");
          console.log(this.categorydata[this.currentindex].categoryDetail);
          break;
        case 1:
          this.mycount = "new";
          break;
        case 2:
          this.mycount = "sell";
          break;
      }
    },
    escroll(position) {
      // console.log(position.y)
      this.isShow = -position.y > 1000;
    },
    backtop() {
      this.$refs.scrollRef.scrollTo(0, 0, 500);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.navbar {
  background-color: lightpink;
  font-size: 18px;
  color: white;
}

.content {
  height: calc(100% - 49px - 44px);
  overflow: hidden;
  display: flex;
}

.scroll {
  height: 100%;
  flex: 1;
  width: 70%;
}
.itop {
  position: fixed;
  right: 20px;
  bottom: 69px;
}
</style>
