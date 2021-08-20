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

// class Super {
//   constructor(mingzi) {
//     this.uname = mingzi;
//   }
// }
//
// var aa = new Super("徐素婧");
//
// console.log(aa.uname);
//
// Vue.filter("slve", function (value) {
//   return value * 2;
// });

// setTimeout(() => {
//   console.log("你好");
// }, 1000);

// new Promise((resolve) => {
//
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     console.log("你好");
//     console.log("你好");
//     console.log("你好");
//     console.log("你好");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     console.log("随便");
//     console.log("随便");
//     console.log("随便");
//     console.log("随便");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     console.log("可以");
//     console.log("可以");
//     console.log("可以");
//     console.log("可以");
//   });

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve('参数')
//     reject("错误")
//   },1000)
// }).then((data)=>{
//   console.log(data)
// }).catch(err=>{
//   console.log(err);
// })

// let a = {
//   uname:"lady"
// }
//
// function fn() {
//   // console.log(a)
//   console.log(this)
// }

// fn.call()
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];

// const data = new Set(arr)
//
// console.log(Array.from(data))

// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     console.log("类型错误");
//     return;
//   }
//   var newarr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }
// console.log(unique(arr));

function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("类型错误");
    return;
  }

  // var newarr = [arr[0]]
  // arr.filter(item=>{
  //   if(item)
  // })
}

console.log(unique(arr));
