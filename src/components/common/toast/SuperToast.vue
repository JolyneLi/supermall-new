<template>
  <div class="mytoast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "SuperToast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(value, delay) {
      this.message = value;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
.mytoast {
  position: fixed;
  top: 40%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 8px;
}
</style>
