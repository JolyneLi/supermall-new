<template>
  <div>
    <img
      src="~assets/img/get.png"
      class="imgs"
      :class="{ checkd: isChecked }"
    />
  </div>
</template>

<script>
export default {
  name: "botton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },

  methods: {},
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
.checkd {
  border-color: orange;
  background-color: orange;
}
</style>
