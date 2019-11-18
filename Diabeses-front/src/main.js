// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css'
import './assets/fonts/fontawesome-free-5.11.2-web/css/all.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import variables from './variables'
import NProgressPlugin from './plugins/nprogress.plugin'
import AxiosPlugin from './plugins/axios.plugin'
import Notifications from 'vue-notification';
import Snotify, { SnotifyPosition } from 'vue-snotify';

Vue.config.productionTip = false

const optionsSnotify = {
  toast: {
    position: SnotifyPosition.centerCenter,
    timeout: 10000,
    backdrop: 0.2,
    preventDuplicates: true,
    showProgressBar: true,
  },
};

Vue.use(router)
Vue.use(BootstrapVue)

Vue.use(NProgressPlugin, { showSpinner: true })
Vue.use(AxiosPlugin, variables)
Vue.use(Notifications)
Vue.use(Snotify, optionsSnotify);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
