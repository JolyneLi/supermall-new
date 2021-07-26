<template>
  <div class="goods-item" v-if="this.obj.img">
    <img :src="showdata" alt="" />
    <div class="goods-info">
      <p>{{ obj.title }}</p>
      <span class="price">{{ obj.price }}</span>
      <span class="collect">{{ obj.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: function () {
        return Object;
      },
    },
  },
  computed: {
    showdata() {
      return this.obj.img;
    },
  },
  methods: {},
};
</script>

<style scoped>
.goods-item {
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
