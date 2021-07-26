<template>
  <aside>
    <div class="content">
      <div class="icon-lyq-xinxi"></div>
      <i>我的信息</i>
    </div>
    <div class="content">
      <div class="icon-jifen"></div>
      <i>积分商城</i>
    </div>
    <div class="content">
      <div class="icon-huiyuan-"></div>
      <i>会员卡</i>
    </div>
    <div class="content">
      <div class="icon-wode1"></div>
      <i>我的购物车</i>
    </div>
    <div class="content">
      <div class="icon-xiazai"></div>
      <i>下载APP</i>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SelectProfile",
};
</script>

<style scoped>
aside .content {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
aside .content .icon-lyq-xinxi {
  margin-left: 40px;
  margin-right: 10px;
  font-size: 26px;
  color: #333333;
}
aside .content .icon-jifen {
  margin-left: 40px;
  margin-right: 10px;
  font-size: 26px;
  color: #fc7b53;
}
aside .content .icon-huiyuan- {
  margin-left: 40px;
  margin-right: 10px;
  font-size: 26px;
  color: #ffc636;
}

aside .content .icon-wode1 {
  margin-left: 40px;
  margin-right: 10px;
  font-size: 26px;
  color: #7ed321;
}

aside .content .icon-xiazai {
  margin-left: 38px;
  /*margin-right: 5px;*/
  font-size: 35px;
  color: #ff8198;
}
</style>
