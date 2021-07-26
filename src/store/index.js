import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
Vue.use(Vuex);

const state = {
  // { "img": "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg", "title": "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装", "desc": "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装", "price": "59.00", "iid": "1m70y5k", "count": 1, "checked": true }
  cartlist: [],
};
const mutations = {
  addCounter(state, payload) {
    payload.count = payload.count + 1;
  },
  addCart(state, payload) {
    // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    Vue.set(payload, "count", 1);
    // payload.count = 1;
    Vue.set(payload, "checked", true);
    // payload.checked = true;
    state.cartlist.push(payload);
    // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions: {
    addCartaction(context, payload) {
      return new Promise((resolve) => {
        const result = context.state.cartlist.find((item) => {
          return item.iid == payload.iid;
        });

        if (result) {
          context.commit("addCounter", payload);
          return resolve("数量 + 1");
        } else {
          context.commit("addCart", payload);
          return resolve("添加到购物车");
        }
      });
    },
  },
  modules: {},
});
