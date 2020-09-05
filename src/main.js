// eslint-disable-next-line no-unused-vars
import $ from "jquery";
import Vue from "vue";
import ElementUI from "element-ui";
// 自定义Element UI样式
import "./styles/element-variables.scss";
// 引入全局css
import "./styles/index.scss";

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
