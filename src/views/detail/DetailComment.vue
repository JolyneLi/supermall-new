<template>
  <div v-if="Object.keys(commentdataobj).length !== 0" id="comment">
    <div class="comment-msg">
      <div class="msg">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div>
      <main v-for="(item, i) in commentdata" :key="i">
        <main class="main-top">
          <img :src="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </main>
        <article>{{ item.content }}</article>
        <article class="time">
          {{ (item.created * 1000) | showdate }} {{ item.style }}
        </article>
      </main>
    </div>
    <footer v-for="(item, index) in commentdata" :key="index">
      <div v-if="item.hasOwnProperty('images')">
        <img
          :src="imgs"
          alt=""
          v-for="(imgs, indey) in item.images"
          :key="indey"
        />
      </div>
    </footer>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("zh-cn");
// import {formatDate} from "components/common/utils"
export default {
  name: "DetailComment",
  props: {
    commentdataobj: {
      type: Object,
      default: () => {},
    },
    commentdata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      nowDate: null,
    };
  },
  // created() {
  //   this.nowDate = moment(this.commentdata.created).format("YYYY-MM-DD HH:mm");
  // },

  // filters:{
  //   showDate(value){
  //     // 将时间戳转成Date对象
  //     const date = new Date(value * 1000)
  //
  //     // 将Date进行格式化
  //     return formatDate(date,'yyyy/MM/dd hh:mm:ss')
  //   }
  // },
  filters: {
    showdate(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped>
#comment {
  padding: 10px 8px;
  /*height: 500px;*/
  /*background-color: #eeeeee;*/
  border-bottom: 5px solid #f5f5f5;
}
.comment-msg {
  height: 50px;
  line-height: 50px;
  /*background-color: pink;*/
  position: relative;
  line-height: 50px;
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-items: center;*/
  /*border-bottom: 1px solid blue;*/
}
.msg {
  position: absolute;
  left: 0;
}
.more {
  position: absolute;
  right: 40px;
}
.comment-msg::after {
  content: "";
  display: inline-block;
  background: url("../../assets/img/right.png");
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  position: absolute;
  top: 16px;
  right: 20px;
  /*background-color: #333333;*/
}
.main-top {
  display: flex;
  line-height: 50px;
  padding-bottom: 13px;
}
.main-top img {
  /*vertical-align: middle;*/
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid rgba(128, 128, 128, 0.3);
  margin-right: 15px;
}
article {
  color: #666666;
}
.time {
  padding: 10px 0;
}

footer img {
  margin-right: 5px;
  width: 33%;
  /*height: 90px;*/
}
</style>
