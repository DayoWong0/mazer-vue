import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
// plugins
import './plugins/perfect-scrollbar'
import './plugins/vue-apexcharts'
import './plugins/toastify'
import './plugins/rater'
import './plugins/vue-sweetalert2'
import './plugins/bootstrap'
import './plugins/feather-icons'
// css
import '@/assets/scss/bootstrap.scss'
import '@/assets/scss/app.scss'
import '@/assets/scss/icons.scss'
// router
import router from './router'
// lazy-load
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
