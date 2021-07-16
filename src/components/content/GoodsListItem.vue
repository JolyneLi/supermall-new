<template>
  <div
    class="goods-item"
    @click="pushdetail"
    v-if="this.obj.image || this.obj.show.img"
  >
    <img :src="showdata" alt="" @load="imgload" />
    <div class="goods-info">
      <p>{{ obj.title }}</p>
      <span class="price">{{ obj.price }}</span>
      <span class="collect">{{ obj.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: {
    obj: {
      type: Object,
      default: function () {
        return Object;
      },
    },
  },
  computed: {
    // 传入不同的对象 但是图片的名称不同 则选用与%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    showdata() {
      return this.obj.image || this.obj.show.img;
    },
  },
  methods: {
    imgload() {
      // console.log("11")
      this.$bus.$emit("imgloadend");
    },
    pushdetail() {
      this.$router.push(`/detail/${this.obj.iid}`);
    },
  },
};
</script>

<style scoped>
.goods-item {
  flex: 1;
  width: 48%;
  padding: 4px 5px 10px 5px;
  /*padding-bottom: 40px*/
}

.goods-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info {
  /*position: absolute;*/
  /*bottom: 5px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*font-size: 12px;*/
  /*overflow: hidden;*/
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  margin-right: 20px;
  color: red;
}

/*.goods-info .collect::before{*/
/*  display: inline-block;*/
/*  width: 40px;*/
/*  height: 40px;*/
/*  content: '';*/
/*  background: url("../../assets/img/collet.png") no-repeat 40px 40px ;*/
/*}*/
</style>
