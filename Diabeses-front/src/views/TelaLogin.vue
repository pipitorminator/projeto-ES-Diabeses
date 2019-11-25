<template>
  <body>
      <div id="fundo-externo"> 
        <div id="fundo"> 
          <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <notifications group="login" position="top right"/>
        <div id="CamposLogin" class="card col-md-4">
          <div class="card-body text-center">
            <h3>Login</h3>
            <b-form @submit="onSubmit">
              <div id="campoEmail">
                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-class="fas fa-envelope fa-2x"
                  label-for="input-default"
                >
                  <b-form-input
                    id="input-login"
                    class="text-center input-form"
                    type="email"
                    v-model="Email"
                    placeholder="Digite seu E-mail"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>

              <div id="campoSenha">
                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-class="fas fa-lock fa-2x"
                  label-for="input-senha"
                >
                  <b-form-input
                    id="input-senha"
                    class="text-center input-form"
                    type="password"
                    v-model="Senha"
                    placeholder="Digite sua senha"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>

              <div id="botao">
                <b-button variant="primary" type="Submit" id="btLogin">Login</b-button>
                <b-link @click="$router.push('/cadastro-usuario')">ou cadastre-se</b-link>
              </div>
            </b-form>
          </div>
        </div>
      </div>
  </body>
</template>

<script>
import config from "../helpers/generalConfig";
import Router from 'vue-router'
export default {
  data() {
    return {
      Email: "",
      Senha: "",
      name: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return new Promise((resolve, reject) => {
        this.Loading = true;
        this.$api()
          .get(`${config.jsonServer}/api/userLogin?email=${this.Email}&senha=${this.Senha}`)
          .then(response => {
            resolve(response.data[0]);
            if(response.data[0]){
              this.$notify({
                group: "login",
                type: "success",
                title: "Logado",
                duration: 10000,
                speed: 1000,
                text: "Login feito com sucesso."
          });
            }else{
              this.$notify({
                group: "login",
                type: "error",
                title: "Atenção",
                duration: 10000,
                speed: 1000,
                text: "Email ou Senha incorretos."
          });
            }
            this.Loading = false
          })
          .catch(err => {
            console.log('error ' + err)
            this.Loading = false
          })
      })
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

#CamposLogin {
  margin-top: 150px;
  background-color:rgb(240, 240, 240,0.9);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
#TextEmail {
  font-size: 20px;
  margin-bottom: 2px;
}
#TextSenha {
  font-size: 20px;
  margin-bottom: 2px;
}
#campoSenha {
  margin-bottom: 15px;
}
</style>