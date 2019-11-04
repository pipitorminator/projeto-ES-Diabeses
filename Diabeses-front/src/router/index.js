import Vue from 'vue'
import Router from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TelaInicial',
      component: TelaInicial
    }
  ]
})
