<template>
  <div id="money">
    <div class="aaa">
      <cate-btn></cate-btn>
    </div>
    <div class="bbb">全选</div>
    <div class="ccc">已选{{ selectcount }}件,<span>合计:</span></div>
    <div class="ddd">{{ heji }}</div>
    <div class="eee">结算</div>
  </div>
</template>

<script>
import CateBtn from "./CateBtn";
import { mapGetters } from "vuex";
export default {
  name: "CateMoney",
  components: {
    CateBtn,
  },
  computed: {
    ...mapGetters(["heji", "selectcount"]),
  },
};
</script>

<style scoped>
#money {
  background-color: white;
  border-top: 1px solid #eeeeee;
  height: 44px;
  display: flex;
}

.aaa {
  width: 30px;
  /*position: relative;*/
  /*top: calc(50% - 12px);*/
  /*text-align: center;*/
  /*line-height: 50px;*/
  /*margin-left: 10px;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.bbb {
  line-height: 44px;
  font-size: 16px;
  margin-right: 45px;
}
.ccc {
  color: #999999;
  line-height: 40px;
  font-size: 15px;
}
.ccc span {
  color: black;
  font-size: 16px;
}
.ddd {
  width: 50px;
  color: #ff7600;
  line-height: 33px;
  margin-right: 15px;
  /*font-size: 33px;*/
  /*font-size: 20px;*/
  font-weight: 500;
}
.ddd::before {
  content: "￥";
  font-size: 14px;
}
.eee {
  position: relative;
  right: -15px;
  width: 80px;
  color: white;
  background-color: #ff8198;
  line-height: 34px;
  text-align: center;
  margin-left: 30px;
  /*padding-left: 5px;*/
  /*padding: 5px;*/
  border-radius: 20px;
  margin: 5px 0;
  background: orange;
  background-image: linear-gradient(to right, #ff7600, #ff4d00);
}
</style>
