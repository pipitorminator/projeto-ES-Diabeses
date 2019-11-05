<template>
  <div>
      <div id="Campos">
          Nome: 
          <b-form-input v-model="this.NomeUsuario" placeholder="Enter your name"></b-form-input>
            <input type="radio" id="Homem" value="Masculino" v-model="this.Sexo">
            <input type="radio" id="Mulher" value="Feminino" v-model="this.Sexo">
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
    };
  },

  methods: {

  }
};
</script>

<style scoped>

</style>
