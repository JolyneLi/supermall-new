<template>
  <div id="detailimg" v-if="Object.keys(imm).length !== 0">
    <div class="msg">
      <div class="msg-start"></div>
      {{ imm.desc }}
      <div class="msg-end"></div>
    </div>
    <div>
      <div class="immmsg">
        {{ imm.detailImage[0].key }}
      </div>
      <div v-for="(item, i) in imm.detailImage[0].list" :key="i" class="aaa">
        <img :src="item" alt="" @load="detailimglod" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImg",
  props: {
    imm: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    detailimglod() {
      this.$emit("detailimglod");
    },
  },
};
</script>

<style scoped>
.msg {
  position: relative;
  margin: 8px;
}
.msg-start,
.msg-end {
  width: 100px;
  height: 5px;
  border-bottom: 1px solid #999999;
}

.msg-start {
  margin: 0 0 5px 5px;
}

.msg-end {
  position: absolute;
  right: 5px;
}

.immmsg {
  margin-left: 8px;
}
.aaa img {
  width: 100%;
}
</style>
