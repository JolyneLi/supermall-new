import SuperToast from "./SuperToast";

const toastObj = {};

// 执行install函数
toastObj.install = function (Vue) {
  // Vue.prototype.$toast = 对象
  // 对象是SuperToast.vue这个组件，然后在组件上写一个函数 methods
  // 但是SuperToast.vue有自己的模板，有template

  // 1.创建组件构造器
  const toastconstructor = Vue.extend(SuperToast);

  // 2.用new的方式，根据组件构造器，创建一个组件对象
  // const aaa = new toastconstructor()
  const toast = new toastconstructor();

  // 3.将组件对象挂在到某个元素上
  toast.$mount(document.createElement("div"));

  // 4.这个div就是toast.$el
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default toastObj;
