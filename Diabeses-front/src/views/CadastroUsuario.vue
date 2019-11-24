<template>
  <div  class="row d-flex justify-content-center">
    <div id="Campos"  class="card col-md-">
      <h3 id="h1"> Digite seus dados pessoais </h3>
      <div id="campoNome"> <input v-model="this.NomeUsuario" size="60" placeholder="Digite seu Nome"></div>
  
      <div id="campoCpf_Telefone"> 
        <input id="Cpf" v-model="this.cpf" placeholder="Digite seu cpf">
        <input id="Telefone" v-model="this.Telefoene" placeholder="Digite seu telefone">
        <br>
      </div>

      <div id="checkSexo">
        Sexo:
          <select v-model="this.Sexo">
          <option disabled value="">Escolha um item</option>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
        <br>
      </div>

      <div id="Endereco">
        <p id="textEndereco"> Digite os dados do seu endereço: </p>

        <div id="Estado_Cidade_Bairro">   
          <input id="Estado" v-model="this.Estado"  placeholder="Estado"> 
          <input id="Cidade" v-model="this.Cidade"  placeholder="Cidade">
        </div> 
        <div id="Rua_Numero"> 
          <input id="Bairro" v-model="this.Bairro" placeholder="Bairro">
          <input v-model="this.Rua" placeholder="Rua">
          <input v-model="this.Numero" size="4px" placeholder="Número e complemento">
        </div>
        <div id="campoNumero">  </div>
      </div>

      <div id="campoLogin">
        <p id="textLogin"> Digite os dados do seu login: </p>
        <div id="campoEmail">
          <input type="email" size="60" v-model="this.Email"  placeholder="Digite seu E-mail">   
        </div>
        <div id="campoSenha">
          <input type="password" size="60" v-model="this.senha"  placeholder="Digite sua senha">
        </div>
        <div id="campoSenhaConfirm"> <input type="password" size="60" v-model="this.senha"  placeholder="Confirme sua senha"></div>
      </div>
      
      <div id="botoes"> 
        <b-button variant="secondary" type="Submit" id="btnLimpar">Limpar</b-button>
        <b-button variant="secondary" type="Submit" id="btnCadastro">Cadastrar</b-button>
      </div>
        
      </div>

    </div>
  </div>
</template>

<script>
import config from "../helpers/generalConfig";

export default {
  data() {
    return {
      NomeUsuario: "",
      Sexo: "",
      Telefone: "",
      Email: "",
      Senha: "",
      cpf: "",
      Estado: "",
      Cidade: "", 
      Bairro: "",
      Rua: "",
      Numero: "",
      Complemento: "",
    };
  },

  methods: {
  }
};
</script>

<style scoped>
#Campos{
  text-align: center;
  margin-top: 40px;
  background-color: #f8f8ff8a;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  
}
#campoCpf_Telefone{
  margin-right: 0px;
  margin-bottom: 5px
}
#checkSexo{
  margin-top: 10px;
  margin-right: 310px;
  margin-bottom: 5px;
}
#Cpf{
  margin-right: 100px;
  margin-left: -30px
}
#campoNome{
  margin-bottom: 7px;
  margin-top: 30px;
  margin-right: 33px;
}
#textEndereco{
  margin-right: 200px;
  font-size: 20px;
  color: black;
}
#Estado_Cidade_Bairro{
  
  margin-right: 137px;
}
#Rua_Numero{
  margin-top: 5px;
  margin-right: 66px;
}
#textLogin{
  margin-top: 10px;
  margin-right: 240px;
  font-size: 20px;
  color: black;
}
#campoEmail{
  margin-right: 40px;
  margin-bottom: 7px;
}
#campoSenha{
   margin-right: 40px;
   margin-bottom: 7px;
}
#campoSenhaConfirm{
  margin-right: 40px;
  margin-bottom: 7px;
}
</style>
