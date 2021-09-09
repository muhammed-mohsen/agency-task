import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import store from "./store";

import "@/assets/css/tailwind.css";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
