import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么，比如传token
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );
  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      const res = response.data;
      //对错误代码做处理
      return res;
    },
    (error) => {
      // 对响应错误做点什么
      console.log("err:" + error); // for debug
    }
  );

  return instance(config);
}
