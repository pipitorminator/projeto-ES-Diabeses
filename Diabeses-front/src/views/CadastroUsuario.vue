<template>
  <body>
    <div id="fundo-externo"> 
      <div id="fundo"> 
        <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <notifications group="not" position="top right"/>
      <div class="card col-md-6" id="Campos">
        <div class="card-body">
          <h1 id="h1">Digite seus dados pessoais</h1>
          <b-form @submit="onSubmit">
            <div class="col-md-10" id="campoNome" style="display: inline-block;">
              <b-form-input v-model="usuario.NomeUsuario" required placeholder="Digite seu Nome" />
            </div>

            <div class="col-md-12" id="campoCpf_Telefone" style="display: inline-block;">
              <div class="col-md-5" style="display: inline-block;">
                <b-form-input id="Cpf" v-model="usuario.cpf" required placeholder="Digite seu cpf" />
              </div>
              <div class="col-md-5" style="display: inline-block;">
                <b-form-input
                  id="Telefone"
                  v-model="usuario.Telefone"
                  required
                  placeholder="Digite seu telefone"
                />
              </div>
              <br />
            </div>

            <div id="checkSexo" class="col-md-6" style="display: inline-block;">
              Sexo:
              <div style="display: inline-block;">
                <b-form-select v-model="usuario.Sexo" required>
                  <option disabled value>Escolha um item</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </b-form-select>
                <br />
              </div>
            </div>

            <div id="Endereco">
              <p id="textEndereco">Digite os dados do seu endereço:</p>

              <div id="Estado_Cidade_Bairro" class="col-md-12" style="display: inline-block;">
                <div style="display: inline-block;">
                  <b-form-input id="Estado" v-model="usuario.Estado" required placeholder="Estado" />
                </div>
                <div style="display: inline-block;">
                  <b-form-input id="Cidade" v-model="usuario.Cidade" required placeholder="Cidade" />
                </div>
                <div style="display: inline-block;">
                  <b-form-input id="Bairro" v-model="usuario.Bairro" required placeholder="Bairro" />
                </div>
              </div>
              <div id="Rua_Numero" class="col-md-12" style="display: inline-block;">
                <div style="display: inline-block;">
                  <b-form-input v-model="usuario.Rua" required placeholder="Rua" />
                </div>
                <div style="display: inline-block;">
                  <b-form-input v-model="usuario.Numero" required placeholder="Número" />
                </div>
                <div style="display: inline-block;">
                  <b-form-input v-model="usuario.Complemento" required placeholder="Complemento" />
                </div>
              </div>
            </div>

            <div id="campoLogin">
              <p id="textLogin">Digite os dados do seu login:</p>
              <div id="campoEmail" class="col-md-10" style="display: inline-block;">
                <b-form-input type="email" v-model="usuario.Email" required placeholder="Digite seu E-mail" />
              </div>
              <div id="campoSenha" class="col-md-10" style="display: inline-block;">
                <b-form-input type="password" v-model="usuario.Senha" required placeholder="Digite sua senha" />
              </div>
              <div id="campoSenhaConfirm" class="col-md-10" style="display: inline-block;">
                <b-form-input
                  type="password"
                  v-model="usuario.Senha"
                  required
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            <div id="botoes">
              <b-button variant="warning" type="button" @click="LimparCampos()">Limpar</b-button>
              <b-button variant="primary" type="Submit" >Cadastrar</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import config from "../helpers/generalConfig";

export default {
  data() {
    return {
      usuario: {
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
        Complemento: ""
      }
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
            return new Promise((resolve, reject) => {
        this.Loading = true;
        this.$api()
          .post(`${config.jsonServer}/api/cadastroUsuario`, this.usuario)
          .then(response => {
            resolve(response.data[0]);
              this.$notify({
                group: "not",
                type: "success",
                title: "Logado",
                duration: 10000,
                speed: 1000,
                text: "usuario cadastrado"
          });
          })
          .catch(err => {
            console.log('error ' + err)
            this.$notify({
                group: "not",
                type: "error",
                title: "Error",
                duration: 10000,
                speed: 1000,
                text: "Erro ao Criar Usuario."
          });
            this.Loading = false
          })
      })
    },  
    LimparCampos() {
      this.usuario = {};
    }
  }
};
</script>

<style scoped>

#fundo-externo {
    overflow: hidden; /* para que não tenha rolagem se a imagem de fundo for maior que a tela */
    width: 100%;
    height: 100%;
    position: relative; /* criamos um contexto para posicionamento */
}

#fundo {
    position: fixed; /* posição fixa para que a possível rolagem da tela não revele espaços em branco */
    width: 100%;
    height: 100%;
}

.input-form {
  box-sizing: content-box;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

#Campos {
  text-align: center;
  margin-top: 50px;
  background-color:rgb(240, 240, 240,0.9);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
#campoCpf_Telefone {
  margin-left: 3px;
  margin-right: 0px;
  margin-bottom: 5px;
}
#checkSexo {
  margin-top: 10px;
  margin-right: 310px;
  margin-bottom: 5px;
}
#Cpf {
  margin-right: 100px;
  margin-left: -30px;
}
#campoNome {
  margin-bottom: 7px;
  margin-top: 30px;
  margin-right: 33px;
}
#textEndereco {
  margin-right: 200px;
  font-size: 20px;
  color: black;
}
#Estado_Cidade_Bairro {
  margin-right: 132px;
}
#Rua_Numero {
  margin-top: 5px;
  margin-right: 66px;
}
#textLogin {
  margin-top: 10px;
  margin-right: 240px;
  font-size: 20px;
  color: black;
}
#campoEmail {
  margin-right: 40px;
  margin-bottom: 7px;
}
#campoSenha {
  margin-right: 40px;
  margin-bottom: 7px;
}
#campoSenhaConfirm {
  margin-right: 40px;
  margin-bottom: 7px;
}
select{
  margin-right: -28px;
}
</style>
