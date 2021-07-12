<template>
  <div class="homerecommend">
    <div v-for="(item, i) in recommend" :key="i" class="homerecommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: ["recommend"],
};
</script>

<style scoped>
.homerecommend {
  display: flex;
  margin-top: 10px;
  border-bottom: 5px solid #eeeeee;
}
.homerecommend-item {
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
}

.homerecommend-item img {
  width: 70px;
  height: 70px;
}
</style>
