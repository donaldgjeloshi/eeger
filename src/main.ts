import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//if no js file name occurs then it will look for index.js.
import "@/components/news";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
