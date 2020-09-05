// eslint-disable-next-line no-unused-vars
import $ from "jquery";
import Vue from "vue";

import ElementUI from "element-ui";
import "./styles/element-variables.scss";
Vue.use(ElementUI);

import App from "./App.vue";
import router from "./router";
import store from "./store";
// 权限控制
import "./permission";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
