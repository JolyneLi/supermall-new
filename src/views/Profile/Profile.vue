<template>
  <div>
    <nav-bar class="navbar">
      <template v-slot:mid> 果粒橙商场 </template>
    </nav-bar>
    <div class="msg">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <i>登录/注册</i>
        <i><img src="~assets/img/phone.png" />暂无绑定的手机</i>
      </div>
    </div>
    <div class="data">
      <div>
        <i><span>0</span> 元</i>
        <i>我的余额</i>
      </div>
      <div>
        <i><span>0</span> 个</i>
        <i>我的优惠</i>
      </div>
      <div>
        <i><span>0</span> 分</i>
        <i>我的积分</i>
      </div>
    </div>
    <select-profile></select-profile>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SelectProfile from "./SelectProfile";
export default {
  name: "Profile",
  components: {
    NavBar,
    SelectProfile,
  },
};
</script>

<style scoped>
.navbar {
  background-color: lightpink;
  color: white;
  font-weight: 600;
}
.msg {
  height: 120px;
  /*line-height: 120px;*/
  background-color: #ff8198;
  display: flex;
  align-items: center;
  /*margin-left: 20px;*/
  position: relative;
}
.msg::after {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  right: 30px;
  top: 50px;
  /*background: url("~assets/img/right.png");@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  background: url("../../assets/img/right.png");
  background-size: 100% 100%;
}
.left {
  width: 50px;
  height: 50px;
  background-color: #e7e1e3;
  margin: 0 15px 0 40px;
  border-radius: 50px;
}
.right {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;

  /*line-height: 120px;*/
}
.right i:nth-child(2) {
  margin-top: 5px;
}
.right i:nth-child(2) img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.data {
  display: flex;
  height: 100px;
  /*background: #999999;*/
  border-bottom: 10px solid #f2f2f2;
}
.data div {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  /*line-height: 50px;*/
  justify-content: center;
}
.data div:nth-child(n + 2) {
  border-left: 1px solid #eeeeee;
}
.data div i {
  margin-top: 2px;
}
.data div i span {
  color: #ff5777;
  font-size: 24px;
  font-weight: 700;
}
</style>
