<template>
  <div id="CamposLogin">
    <p id="TextEmail"> E-mail</p>
    <div id="campoEmail"> <input type="email" size="60" v-model="this.Email"  placeholder="Digite seu E-mail"></div>
    <p id="TextSenha"> Senha</p>
    <div id="campoSenha"> <input type="password" size="60" v-model="this.senha"  placeholder="Digite sua senha"></div>

    <div id="botao"> 
        <button id="btLogin" type="button" onclick="FazerLogin()">Fazer Login</button>
        <a href="http://localhost:8080/#/cadastro-usuario">ou cadastre-se</a>
    </div>
  </div>
</template>

<script>
import config from '../helpers/generalConfig'

export default {
  data () {
    return {
      Email: "",
      Senha: "",
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  #CamposLogin{
    text-align: center;
    margin-top: 190px;
    background-color:rgb(206, 200, 200) ;
    
  }
  #TextEmail{
    font-size: 20px;
    margin-bottom: 2px;
  }
  #TextSenha{
    font-size: 20px;
    margin-bottom: 2px; 
  }
  #campoSenha{
    margin-bottom: 15px;
  }
</style>