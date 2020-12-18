import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Vant from "vant";
import axios from "axios";
import "vant/lib/index.css";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
