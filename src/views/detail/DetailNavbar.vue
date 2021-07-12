<template>
  <div class="detail">
    <nav-bar>
      <div slot="left" class="icon-fanhui" @click="back"></div>
      <div slot="mid" class="aaa">
        <div v-for="(item, i) in navdata" :key="i">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  components: {
    NavBar,
  },
  data() {
    return {
      navdata: ["精选", "精选", "精选", "精选"],
    };
  },
  methods: {
    back() {
      this.$router.back("/home");
    },
  },
};
</script>

<style scoped>
.aaa {
  display: flex;
}
.aaa div {
  flex: 1;
}
/*.icon-fanhui{*/
/*  position: relative;*/
/*}*/
/*.icon-fanhui::after {*/

/*  content: "";*/
/*  width: 44px;*/
/*  height: 44px;*/
/*  background: #666666;*/
/*  display: block;*/
/*  position: absolute;*/
/*  top:0*/
/*}*/
</style>
