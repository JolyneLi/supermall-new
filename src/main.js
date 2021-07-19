import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// moment.locale('zh-cn')
// Vue.prototype.$moment = moment
//

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
