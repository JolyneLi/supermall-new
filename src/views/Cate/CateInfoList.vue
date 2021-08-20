<template>
  <div id="infolist">
    <div class="left">
      <cate-btn
        :is-checked="item.checked"
        @click.native="checkClick"
      ></cate-btn>
    </div>
    <div class="mid">
      <img :src="item.img" alt="" />
    </div>
    <div class="right">
      <div class="desc">{{ item.desc }}</div>
      <div class="msg">{{ item.desc }}</div>
      <div class="price">
        <div class="price1">{{ item.price }}</div>
        <div class="price2">×{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CateBtn from "./CateBtn";
export default {
  name: "CateInfoList",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.item);
  },
  components: {
    CateBtn,
  },
  methods: {
    checkClick() {
      // console.log(this.item.checked);
      this.item.checked = !this.item.checked;
    },
  },
};
</script>

<style scoped>
#infolist {
  display: flex;
  height: 140px;
  margin: 10px 8px;
  background-color: white;
  border-radius: 20px;
}

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
.left {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  /*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
}
.mid {
  width: 25%;
}
.mid img {
  height: 100%;
  border-radius: 20px;
  padding: 8px;
}
.right {
  width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  padding-left: 20px;
}
.right div {
  white-space: nowrap;
}
.desc {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.msg {
  color: #999999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.price {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.price div {
  /*display: flex;*/
  /*margin-top: 50px;*/
}

.price {
  /*font-size: 25px;*/
}
.price1 {
  font-size: 25px;
  font-weight: 600;
  color: #ec501f;
}
.price1::before {
  content: "￥";
  font-size: 14px;
}

.price2 {
  padding: 2px;
  border: 1px solid #999999;
  border-radius: 10px;
  font-size: 20px;
}
</style>
