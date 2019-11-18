import Vue from 'vue'
import Router from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import TelaLogin from '../views/TelaLogin.vue'
import CadastroMedicoClinica from '../views/CadastroClinicasMedicos.vue'
import Dicas from '../views/Dicas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TelaInicial',
      component: TelaInicial
    },
    {
      path: '/cadastro-usuario',
      name: 'CadastroUsuario',
      component: CadastroUsuario
    },
    {
      path: '/login',
      name: 'TelaLogin',
      component: TelaLogin
    },
    {
      path: '/cadastro-medicos-clinicas',
      name: 'CadastroMedicoClinica',
      component: CadastroMedicoClinica
    },
    {
      path: '/dicas',
      name: 'Dicas',
      component: Dicas
    }
  ]
})
