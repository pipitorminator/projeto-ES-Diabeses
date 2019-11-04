// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import variables from './variables'
import NProgressPlugin from './plugins/nprogress.plugin'
import AxiosPlugin from './plugins/axios.plugin'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(router)
Vue.use(BootstrapVue)

Vue.use(NProgressPlugin, { showSpinner: true })
Vue.use(AxiosPlugin, variables)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
