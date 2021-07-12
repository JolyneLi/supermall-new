<template>
  <div class="navbar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-mid"><slot name="mid"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 10px rgba(100, 100, 100, 0.1);
  text-align: center;
}
.nav-left,
.nav-right {
  width: 44px;
}
.nav-mid {
  flex: 1;
}
</style>
