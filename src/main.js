import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
// import VModal from "vue-js-modal";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
// Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
