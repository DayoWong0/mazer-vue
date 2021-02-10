import Vue from 'vue'
import App from './App.vue'

// plugins
import './plugins/perfect-scrollbar'
import './plugins/vue-apexcharts'
import './plugins/toastify'
import './plugins/rater'
import './plugins/vue-sweetalert2'
import './plugins/bootstrap'
import './plugins/feather-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
