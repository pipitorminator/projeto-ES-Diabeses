<template>

  <div id="principal">
      <div id="nome">
        Nome: 
      <input size="46" v-model="this.NomeClinicaMedico" placeholder="Informe o Nome da Clinica ou medico " >
      </div>
      <div id="endereço">
        Endereco:
        <input  v-model="this.Estado"  placeholder="Estado"> 
        <input  v-model="this.Cidade"  placeholder="Cidade">
         <div id="endereçoB">
            <input size="46" v-model="this.Bairro" placeholder="Bairro"> 
         </div>
         <div id="endereçoRN">
            <input v-model="this.Rua" placeholder="Rua">
            <input v-model="this.Numero" placeholder="Número ">
         </div>
      </div>
      <div id="descrição">
        Descrição:
      <textarea name="Descrição" cols="48,5" rows="5"></textarea>
      </div>
      <select>
              <option value="">Selecione</option>
              <option value="MD">Medico</option>
              <option value="CL">Clinica</option>
      </select>
      <div id="botão"><button onclick="salvar"> Salvar</button></div>
  </div>
</template>

<script>
import config from "../helpers/generalConfig";

export default {
  data() {
    return {
        NomeClinicaMedico: "",
        Endereco: "",
        Descricao: ""
    };
  }
};
</script>



<style>

  #principal{
    text-align: center;
    margin-top: 40px;
    background-color: steelblue;
  }
  #nome {
    margin-left: -10;
    margin-bottom: 2px;
    margin-right: 0%;
  }
  #endereço{
    margin-left: 10px;
    margin-right:30px;
    margin-bottom: 2px;

  }
  #descrição{
    margin-left: -20px;
    margin-bottom: -3px;
  }
  #endereçoEC{
    margin-left: 118px;
    margin-top: 2px;
  }
  #endereçoB{
    margin-top: 2px;
    margin-left: 72px;
  }
  #endereçoRN{
    margin-left: 40px;
    margin-right: -32px;
    margin-top: 2px;
  }
  textarea{
    margin-left: -4px;
  }
  select{
    margin-bottom: 2px;
    margin-left: -112px;
    margin-right: 100px;
  }

</style>