<template>
<body>
    <div id="fundo-externo"> 
      <div id="fundo"> 
        <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
      </div>
    </div>
  <div class="row d-flex justify-content-center">
    <notifications group="not" position="top right" />
    <div class="card col-md-6" id="Campos">
      <div class="card-body">
        <h1 id="h1">Digite os seus dados</h1>
        <b-form @submit="onSubmit">
          <div class="col-md-10" id="campoNome" style="display: inline-block;">
            <b-form-input
              v-model="clinica.NomeClinicaMedico"
              required
              placeholder="Digite seu Nome (ou de sua Clínica"
            />
          </div>

          <div class="col-md-12" id="Cpf_Telefone" style="display: inline-block;">
            <div class="col-md-5" style="display: inline-block;">
              <b-form-input
                id="Cpf"
                v-model="clinica.Cnpj"
                required
                placeholder="Digite seu Cnpj/Cpf"
              />
            </div>
            <div class="col-md-5" style="display: inline-block;">
              <b-form-input
                id="Telefone"
                v-model="clinica.Telefone"
                required
                placeholder="Digite o seu Telefone"
              />
            </div>
          </div>

          <div id="Endereco">
            <p id="textEndereco">Digite os dados do seu endereço:</p>

            <div id="Estado_Cidade" class="col-md-12" style="display: inline-block;">
              <div class="col-md-5" style="display: inline-block;">
                <b-form-input id="Estado" v-model="clinica.Estado" required placeholder="Estado" />
              </div>
              <div class="col-md-5" style="display: inline-block;">
                <b-form-input id="Cidade" v-model="clinica.Cidade" required placeholder="Cidade" />
              </div>

              <div id="Bairro_Rua" class="col-md-12" style="display: inline-block;">
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Bairro" v-model="clinica.Bairro" required placeholder="Bairro" />
                </div>
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Rua" v-model="clinica.Rua" required placeholder="Rua" />
                </div>
              </div>

              <div id="Num_Comp" class="col-md-12" style="display: inline-block;">
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Numero" v-model="clinica.Numero" required placeholder="Número" />
                </div>
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Comp" v-model="clinica.Complemento" placeholder="Complemento" />
                </div>
              </div>

              <div id="Descricao" class="col-md-12" style="display: inline-block;">
                <p id="textoDescricao">Descrição:</p>
                <div>
                  <b-form-textarea
                    id="textDescricao"
                    v-model="clinica.Descricao"
                    required
                    placeholder="Conte-nos sobre você (ou sobre a Clínica)"
                    rows="3"
                    max-rows="7"
                  />
                </div>
              </div>

              <div id="Tipo">
                Tipo:
                <div style="display: inline-block;">
                  <b-form-select v-model="clinica.Tipo">
                    <option disabled value>Escolha uma opção</option>
                    <option value="Medico">Médico</option>
                    <option value="Clinica">Clínica</option>
                  </b-form-select>
                </div>
              </div>
              <div id="botoes">
                <b-button variant="warning" type="button" @click="LimparCampos()">Limpar</b-button>
                <b-button variant="primary" type="Submit">Cadastrar</b-button>
              </div>
            </div>
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
      clinica: {
        NomeClinicaMedico: "",
        Estado: "",
        Cidade: "",
        Bairro: "",
        Rua: "",
        Numero: "",
        Complemento: "",
        Descricao: "",
        Cnpj: "",
        Telefone: "",
        Tipo: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return new Promise((resolve, reject) => {
        this.Loading = true;
        this.$api()
          .post(`${config.jsonServer}/api/cadastroMedicoClinica`, this.clinica)
          .then(response => {
            resolve(response.data[0]);
            this.$notify({
              group: "not",
              type: "success",
              title: "Logado",
              duration: 10000,
              speed: 1000,
              text: "clinica cadastrado"
            });
          })
          .catch(err => {
            console.log("error " + err);
            this.$notify({
              group: "not",
              type: "error",
              title: "Error",
              duration: 10000,
              speed: 1000,
              text: "Erro ao Criar Usuario."
            });
            this.Loading = false;
          });
      });
    },
    LimparCampos() {
      this.clinica = {};
    }
  }
};
</script>
 


<style>

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
#Cpf_Telefone {
  margin-top: 5px;
  margin-bottom: 6px;
}
#textEndereco {
  font-size: 20px;
  color: black;
}
#Cidade {
  margin-bottom: 5px;
}
#Rua {
  margin-bottom: 5px;
}
#Descricao {
  margin-top: 2px;
}
#textoDescricao {
  margin-bottom: 3px;
  font-size: 20px;
  color: black;
}
#Tipo {
  margin-top: 6px;
  margin-right: 334px;
  margin-bottom: 15px;
}
</style>