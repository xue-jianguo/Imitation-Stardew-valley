/* import axios from "axios";
const service = axios.create({
  baseURL: "/api",
});
// const service = axios.create({
//     baseURL: '/api', // url = base url + request url
//     timeout: 5000 // request timeout
//   }) */
import axios from "axios";
import { Toast } from "mint-ui";

// create an axios instance
const service = axios.create({
  baseURL: "/api", // url = base url + request url
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Toast({
        message: res.message || "出错了",
        position: "bottom",
        duration: 2000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Toast({
      message: error.message,
      iconClass: "icon icon-error",
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
