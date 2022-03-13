import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./UI/index";
import VueClipboard from "vue-clipboard2";
// swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css"; // 引入css 文件
import "swiper/js/swiper"
Vue.use(VueAwesomeSwiper);
Vue.use(VueClipboard)
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
//设置默认的 api 域名
axios.defaults.baseURL = "https://manager.jjjdada.com/Api/";
axios.defaults.baseImgUrl = "https://manager.jjjdada.com";
// 使用请求拦截器,默认放上我们的 token
axios.interceptors.request.use((config) => {
  if (!config.headers.Authorization && localStorage.getItem("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

Vue.prototype.$fixImgUrl = function (url) {
  var res = "";
  // 没有http,默认带上 axios 的基准路径
  if (url.indexOf("https") < 0) {
    res = axios.defaults.baseImgUrl + url;
  } else {
    res = url;
  }
  return res;
};
//路由守卫 拦截器
// router.beforeEach((to, from, next) => {
//   if (to.path != '/') {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/');
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
