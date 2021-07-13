<template>
  <div id="shop">
    <div class="shopimg">
      <a href="">
        <img :src="shop.logo" />
        <span>{{ shop.name }}</span>
      </a>
    </div>
    <div class="shopdata">
      <div class="data-1">
        <div>
          {{ shop.sells }}
        </div>
        <div>总销量</div>
      </div>
      <div class="data-2">
        <div>
          {{ shop.goodsCount }}
        </div>
        <div>全部宝贝</div>
      </div>
      <div class="data-3">
        <table>
          <tr v-for="(item, i) in shop.score" :key="i">
            <td>{{ item.name }}</td>
            <td :class="[item.isBetter == true ? 'activered' : 'activegreen']">
              {{ item.score }}
            </td>
            <!--            *************************************************************************-->
            <td
              :class="[item.isBetter == true ? 'myred' : 'mygreen']"
              align="center"
            >
              {{ item.isBetter == true ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="goshop">
      <div class="goshop-m">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
#shop {
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}

.shopimg {
  height: 50px;
  margin: 20px 0 10px 10px;
  color: #666666;
}
.shopimg img {
  height: 100%;
  border: 2px solid #eeeeee;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.shopdata {
  height: 70px;
  margin: 25px 0 0 30px;
  display: flex;
  font-size: 14px;
  align-items: center;
}
.shopdata .data-1 {
  text-align: center;
}
.shopdata .data-1 div:nth-child(1) {
  margin-bottom: 8px;
}

.shopdata .data-2 {
  padding: 0px 40px 0 20px;
  text-align: center;
  border-right: 1px solid #999;
}
.shopdata .data-2 div:nth-child(1) {
  margin-bottom: 8px;
}

.shopdata .data-3 {
  margin-left: 15px;
  /*text-align: center;*/
}

.shopdata .data-3 table {
  /*width: 120px;*/
}

.shopdata .data-3 tr {
  /*display: block;*/
  /*margin-bottom: 4px;*/
}

.shopdata .data-3 td {
  /*display: block;*/
  padding: 4px;
}

/*.shopdata .data-3{*/
/*  margin-left: 20px;*/
/*  text-align: center;*/
/*}*/

.activered {
  color: red;
}
.activegreen {
  color: green;
}
.myred {
  color: white;
  background-color: red;
}
.mygreen {
  color: white;
  background-color: green;
}

.goshop {
  width: 200px;
  height: 40px;
  line-height: 40px;
  background-color: #eeee;
  margin: 0 auto;
  text-align: center;
  border-radius: 15px;
  margin-top: 20px;
  /*margin-bottom: 20px;*/
}
</style>
