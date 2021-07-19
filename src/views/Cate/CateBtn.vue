<template>
  <div class="de">
    <img src="~assets/img/get.png" class="imgs" :class="{ mynew: isChecked }" />
    {{ isChecked }}
  </div>
</template>

<script>
export default {
  name: "CateBtn",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.imgs {
  width: 24px;
  height: 24px;
  padding: 1px;
  border: 2px solid #eeeeee;
  border-radius: 50%;
}
.mynew {
  border-color: orange;
  background-color: orange;
}
</style>
