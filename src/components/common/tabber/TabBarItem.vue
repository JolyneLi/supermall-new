<template>
  <div class="tab-bar-item" @click="tabbutton">
    <div :style="activeStyle">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // props: ["path"],
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isactive: true,
    };
  },
  computed: {
    isactive() {
      return this.$route.path == this.path ? true : false;
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    tabbutton() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
