import Vue from 'vue'
import Router from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import TelaLogin from '../views/TelaLogin.vue'
<<<<<<< HEAD
import CadastroMedicoClinica from '../views/CadastroClinicasMedicos.vue'
import Dicas from '../views/Dicas.vue'
=======
import PerfilClinicaMedico from '../views/PerfilClinicaMedico.vue'
import PerfilClinicaMedicoInfo from '../views/PerfilClinicaMedicoInfo.vue'
>>>>>>> 09e285d508edfc8c474943332e5d7528c38532a5

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
<<<<<<< HEAD
      path: '/cadastro-medicos-clinicas',
      name: 'CadastroMedicoClinica',
      component: CadastroMedicoClinica
    },
    {
      path: '/dicas',
      name: 'Dicas',
      component: Dicas
=======
      path: '/perfil-clinica-medico',
      name: 'PerfilClinicaMedico',
      component: PerfilClinicaMedico
    },
    {
      path: '/perfil-clinica-medico/:id',
      name: 'PerfilClinicaMedicoInfo',
      component: PerfilClinicaMedicoInfo
>>>>>>> 09e285d508edfc8c474943332e5d7528c38532a5
    }
  ]
})
