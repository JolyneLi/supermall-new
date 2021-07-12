<template>
  <div class="select-control">
    <div
      v-for="(item, i) in selectdata"
      :key="i"
      :class="{ active: count == i }"
      @click="button(i)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectControl",
  props: {
    selectdata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    button(i) {
      this.count = i;
      this.$emit("selecti", i);
    },
  },
};
</script>

<style scoped>
.select-control {
  display: flex;
  /*position: sticky;*/
  /*top: 44px;*/
  background-color: white;
  /*z-index: 0;*/
}
.select-control div {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 17px;
}
.select-control div span {
  padding: 5px;
}

.active {
  color: darkred;
}
.active span {
  border-bottom: 2px solid darkred;
}
</style>
