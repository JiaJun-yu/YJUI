import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/js/rem.js"
import "./assets/css/reset.css"

Vue.config.productionTip = false

import '../dist/yjui.css'

import yjui from './components/index.js'
console.log(yjui)
Vue.use(yjui)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
