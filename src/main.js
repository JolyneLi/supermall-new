import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import toast from "components/common/toast/index";
// 安装插件  调用toast对象的install
Vue.use(toast);

// 移动端300毫秒问题
import Fastclick from "fastclick";
Fastclick.attach(document.body);

// 图片懒加载
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  loading: require("./assets/img/lazyloadpng.jpg"),
});

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// const arr = {
//   a: "你好",
//   b: true,
//   arr: [1, 2.3],
//   sd: {uname: "wangzi"},
//   2:{age:15}
// };
//
// Vue.set(arr,'1',{new:'新的'})
// console.log(arr["2"])
// console.log(arr["1"])
//
// console.log(!arr[2])
// for (let i in arr){
//   console.log(arr[i])
//
// }
// for(let liem of arr){
//   console.log(liem)
//
// }
//
// let a = undefined
// console.log(!a)

// const obj= {
//   uname:"你想",
//   arr:[1,2,3]
// }
// console.log(obj[1])

//
//  const arr1 = [{uname: "wangzi"}, {age:15}]
// const arr2 = [{a: "你好"},{b: true,}]
// arr1.push(...arr2)
//
//
//
// console.log(arr1)
