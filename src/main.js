import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
// import dotenv from 'dotenv'

// dotenv.config()
Vue.use(BootstrapVue);


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
