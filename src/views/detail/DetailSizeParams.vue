<template>
  <div id="sizeparams" v-if="Object.keys(sizeparams).length !== 0">
    <table
      class="size"
      v-for="(item, index) in sizeparams.rule.tables"
      :key="index"
    >
      <template v-for="(tr, indey) in item">
        <tr :key="indey" v-if="tr[1] !== '-'">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </template>
    </table>

    <table class="msg">
      <tr v-for="(tr, x) in sizeparams.info.set" :key="x">
        <!--        {{tr}}-->
        <td>{{ tr.key }}</td>
        <td>{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailSizeParams",
  props: {
    sizeparams: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
#sizeparams {
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 5px solid #f5f5f5;
}
.size,
.msg {
  margin: 0 auto;
  width: 280px;
  /*padding-bottom: 5px;*/
}
.size td {
  border-bottom: 1px solid #eeeeee;
  height: 30px;
  text-align: center;
}
.size tr td:nth-child(1) {
  font-weight: 600;
}

.msg {
  table-layout: fixed;
}
.msg td {
  height: 30px;
  border-bottom: 1px solid #eeeeee;
}

.msg tr td:nth-child(1) {
  padding: 10px 0 10px 20px;
  width: 25%;
  font-weight: 600;
}
.msg tr td:nth-child(2) {
  padding-left: 10px;
  color: #ff8198;
}
</style>
