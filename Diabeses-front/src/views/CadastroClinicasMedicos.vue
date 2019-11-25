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
          <h1 id="h1">Digite os seus dados</h1>
          <b-form @submit="onSubmit">
          
            <div class="col-md-10" id="campoNome" style="display: inline-block;">
              <b-form-input v-model="this.NomeClinicaMedico" required placeholder="Digite seu Nome (ou de sua Clínica" />
            </div>
          </b-form>

          <div class="col-md-12" id="Cpf_Telefone" style="display: inline-block;">
            <div class="col-md-5" style="display: inline-block;">
                <b-form-input id="Cpf" v-model="this.Cnpj" required placeholder="Digite seu Cnpj/Cpf" />
            </div>
            <div class="col-md-5" style="display: inline-block;">
              <b-form-input id="Telefone" v-model="this.Telefone" required placeholder="Digite o seu Telefone" />
            </div>
          </div>

            <div id="Endereco">
              <p id="textEndereco">Digite os dados do seu endereço:</p>

              <div id="Estado_Cidade" class="col-md-12" style="display: inline-block;">
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Estado" v-model="this.Estado" required placeholder="Estado" />
                </div>
                <div class="col-md-5" style="display: inline-block;">
                  <b-form-input id="Cidade" v-model="this.Cidade" required placeholder="Cidade" />
                </div>

                <div id="Bairro_Rua" class="col-md-12" style="display: inline-block;">
                    <div class="col-md-5" style="display: inline-block;">
                      <b-form-input id="Bairro" v-model="this.Bairro" required placeholder="Bairro" />
                    </div>
                    <div class="col-md-5" style="display: inline-block;">
                      <b-form-input id="Rua" v-model="this.Rua" required placeholder="Rua" />
                    </div>
                  
                </div>

                <div id="Num_Comp" class="col-md-12" style="display: inline-block;">
                    <div class="col-md-5" style="display: inline-block;">
                      <b-form-input id="Numero" v-model="this.Numero" placeholder="Número" />
                    </div>
                    <div class="col-md-5" style="display: inline-block;">
                      <b-form-input id="Comp" v-model="this.Complemento" placeholder="Complemento" />
                    </div>
                </div>

                <div id="Descricao" class="col-md-12" style="display: inline-block;">
                  <p id="textoDescricao"> Descrição: </p>
                  <div>
                    <b-form-textarea id="textDescricao" v-model="this.Descricao" required
                      placeholder="Conte-nos sobre você (ou sobre a Clínica)" 
                      rows="3"
                      max-rows="7"/>
                  </div>
                </div>

                <div id="Tipo">
                  Tipo: 
                  <div style="display: inline-block;">
                    <b-form-select v-model="this.Tipo">
                    <option disabled value>Escolha uma opção</option>
                    <option value="Medico">Médico</option>
                    <option value="Clinica">Clínica</option> 
                    </b-form-select>
                  </div>
                </div>

                <div id="botoes">
                  <b-button variant="warning" type="button" @click="LimparCampos()">Limpar</b-button>
                  <b-button variant="primary" type="Submit" >Cadastrar</b-button>
              </div>

              </div>
            </div>

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
    };
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
#Cpf_Telefone{
  margin-top: 5px;
  margin-bottom: 6px;
}
#textEndereco{
  font-size: 20px;
  color: black;
}
#Cidade{
  margin-bottom: 5px;
}
#Rua{
  margin-bottom: 5px;
}
#Descricao{
  margin-top: 2px;
}
#textoDescricao{
  margin-bottom: 3px;
  font-size: 20px;
  color: black;
}
#Tipo{
  margin-top: 6px;
  margin-right: 334px;
  margin-bottom: 15px;
}

 
</style>