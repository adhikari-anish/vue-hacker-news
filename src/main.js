import Vue from 'vue'
import App from './App.vue'
import VueContentPlaceholders from 'vue-content-placeholders'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(VueContentPlaceholders);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
