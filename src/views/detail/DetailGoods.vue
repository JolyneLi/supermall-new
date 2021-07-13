<template>
  <!--  v-if="goods !== null  没有数据则不渲染-->
  <div v-if="goods !== null" id="detailgoods">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-price">
      <div>{{ goods.newPrice }}</div>
      <div>{{ goods.oldPrice }}</div>
      <div>{{ goods.discount }}</div>
    </div>
    <div class="goods-data">
      <div>{{ goods.columns[0] }}</div>
      <div>{{ goods.columns[1] }}</div>
      <div>{{ goods.services[goods.services.length - 1].name }}</div>
    </div>
    <div class="goods-msg">
      <div v-for="i in goods.services.length - 1" :key="i">
        <img :src="goods.services[i - 1].icon" />
        <span>{{ goods.services[i - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    goods: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
#detailgoods {
  padding: 10px 7px 30px 7px;
  border-bottom: 5px solid #f2f5f8;
}
.goods-price {
  display: flex;
  padding: 10px 0px 60px 0;
  height: 40px;
  /*position: relative;*/
}
.goods-price div {
  margin-right: 10px;
}
.goods-price div:nth-child(1) {
  font-size: 25px;
  font-weight: 500;
  color: #ff5777;
  /*  !*letter-spacing:23px*!*/
}
.goods-price div:nth-child(2) {
  font-size: 15px;
  color: #999999;
  text-decoration: line-through;
  /*position: absolute;*/
  /*top:20px*/
  margin-top: 10px;
}

.goods-price div:nth-child(3) {
  /*width: 60px;*/
  height: 20px;
  line-height: 20px;
  background: #ff5777;
  font-size: 10px;
  color: white;
  border-radius: 10px;
  padding: 0 5px;
  /*text-align: center;*/
  /*text-decoration: line-through;*/
}

/*.goods-price span:nth-child(2n-1) {*/
/*  color: #ff5777;*/
/*}*/

.goods-data {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #eeeeee;
}
.goods-data div {
  color: #999999;
  font-size: 14px;
  /*flex: 1;*/
}

.goods-msg {
  margin-top: 25px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*height: 20px;*/
}
.goods-msg div {
}

.goods-msg img {
  width: 17px;
  /*margin-right: 3px;*/
  /*height: 15px;*/
  vertical-align: middle;
}
</style>
