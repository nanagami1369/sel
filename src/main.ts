import Vue from 'vue'
import App from './App.vue'
import VueJsModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VueJsModal, {
  dialog: true
})
new Vue({
  render: h => h(App)
}).$mount('#app')
