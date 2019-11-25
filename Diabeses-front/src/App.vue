<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" @click="$router.push('/')">
          <img style="max-width: 50px;" src="./assets/diabeses-logo1.png">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item active right href="#" @click="$router.push('/perfil-clinica-medico')">Clínicas e Médicos</b-nav-item>
            <b-nav-item active rigth @click="$router.push('/prognostico')">Prognostico </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
              <b-nav-item active right @click="$router.push('/login')">login</b-nav-item>
              <b-nav-item active right @click="$router.push('/cadastro-usuario')" >Cadastre-se</b-nav-item>
              <b-nav-item active right @click="$router.push('/cadastro-medicos-clinicas')" >Cadastro de medicos e clinicas</b-nav-item>
              <b-nav-item active rigth @click="$router.push('/dicas')">Dicas </b-nav-item>
      
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-item:hover {
  text-decoration: underline;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -2px;
}
.navbar-brand:hover {
  box-shadow: 0px 5px 0px #2c3e50;
  border-radius: 50%;
}
</style>
