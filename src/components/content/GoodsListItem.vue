<template>
  <div
    class="goods-item"
    @click="pushdetail"
    v-if="this.obj.image || this.obj.show.img"
  >
    <img v-lazy="showdata" alt="" @load="imgload" />
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
}

.goods-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info {
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
</style>
