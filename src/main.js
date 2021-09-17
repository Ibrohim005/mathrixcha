import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../src/style/main.css'

import Element from 'element-ui'

Vue.use(Element)

// or
// import {
//   Select,
//   Button
//   // ...
// } from 'element-ui'

// Vue.component(Select.name, Select)
// Vue.component(Button.name, Button)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
