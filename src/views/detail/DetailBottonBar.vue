<template>
  <div id="bottombar">
    <footer>
      <div class="footf">
        <div class="footf-1">
          <div class="icon-dianpu"></div>
          <div>店铺</div>
        </div>
        <div class="footf-2">
          <div class="icon-kefu"></div>
          <div>客服</div>
        </div>
        <div class="footf-3">
          <div class="icon-shoucang"></div>
          <div>收藏</div>
        </div>
      </div>
      <div class="foots">
        <div @click="addCate">加入购物车</div>
        <div>立即购买</div>
        <!--        <div>加入购物车</div>-->
        <!--        <div>立即购买</div>-->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DetailBottonBar",
  methods: {
    addCate() {
      // console.log("jiatu ")
      this.$emit("addCate");
    },
  },
};
</script>

<style scoped>
#bottombar {
  height: 49px;
  background-color: white;
  position: relative;
  /*bottom: 49px;*/
}
footer {
  display: flex;
}
.footf {
  /*flex: 1;*/
  display: inline-block;
  width: 40%;
  display: flex;
}

.footf-2,
.footf-3 {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  /*flex: 1;*/
  height: 49px;
}
.footf-1 {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  /*flex: 1;*/
  height: 49px;
}
.footf-1 div:nth-child(1) {
  color: red;
}

.foots {
  width: 60%;
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
}

.foots div {
  text-align: center;
  flex: 1;
  height: 40px;
  line-height: 40px;
  background-color: #ff8198;
  color: #f2f5f8;
}
.foots div:nth-child(1) {
  border-radius: 20px 0 0 20px;
  background: orange;
  background-image: linear-gradient(to right, #ffc601, #ff9902);
}
.foots div:nth-child(2) {
  border-radius: 0 20px 20px 0;
  background: orange;
  background-image: linear-gradient(to right, #ff7600, #ff4d00);
}
</style>
