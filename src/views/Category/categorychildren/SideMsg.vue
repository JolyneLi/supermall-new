<template>
  <in-scroll class="sidehome" v-if="category.length !== 0">
    <div class="side">
      <div
        v-for="(item, index) in category"
        :key="index"
        class="sidelist"
        @click="clickitem(index)"
        :class="{ active: currentindex == index }"
      >
        {{ item.title }}
      </div>
    </div>
  </in-scroll>
</template>

<script>
import InScroll from "../../../components/content/InScroll";
export default {
  name: "SideMsg",
  props: {
    category: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    InScroll,
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  computed: {},
  methods: {
    clickitem(index) {
      this.currentindex = index;
      // console.log("1111")
      this.$emit("clickitem", index);
    },
  },
};
</script>

<style scoped>
.sidehome {
  height: 100%;
}
.side {
  width: 100px;
  background-color: #f6f6f6;
}

.sidelist {
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.active {
  font-weight: 600;
  background-color: white;
  border-left: 3px solid #ff5777;
  color: #ff5777;
}
</style>
