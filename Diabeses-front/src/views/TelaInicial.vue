<template>
  <div>
    <div>
      <b-card
        title="Diabeses"
        img-src="https://image.freepik.com/fotos-gratis/neon-sinal-barzinhos-imagem-coquetel_23-2148184280.jpg"
        img-alt="Image"
        img-left
        tag="article"
      >
        <b-card-text>
            <p id="txt1"> O Diabese é um site que se preocupa com sua saúde, principalmente quando o assunto é Diabetes</p>
            <p id="txt2"> Diabetes é uma doença causada pela produção insuficiente ou má absorção de insulina, 
            hormônio que regula a glicose no sangue e garante energia para o organismo.</p>
            <p id="txt3"> De acordo com a Sociedade Brasileira de Diabetes, existem atualmente, no Brasil, 
              mais de 13 milhões de pessoas vivendo com a doença, o que representa 6,9% da população nacional.</p>
            <p id="txt4"> Neste Site você poderá: </p>
            <ul>
              <li> Saber seu estado de saúde</li>
              <li> Procurar Médicos e/ou Clínicas especializadas</li>
              <li> Receber Dicas de saúde</li>
            </ul>
        </b-card-text>
        
      </b-card>
    </div>
  </div>
</template>

<script>
import config from '../helpers/generalConfig'

export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    //Exemplo chamada da API
    // allUsers () {
    //   console.log(process.env.ROOT_API);
    //   return new Promise((resolve, reject) => {
    //     this.$api()
    //       .get(`${config.jsonServer}/api/user`)
    //       .then(response => {
    //         resolve(response.data[0])
    //       })
    //       .catch(err => {
    //         console.log('error ' + err)
    //       })
    //   })
    // }
  }
}
</script>

<style scoped>
.card-img-left {
  max-width: 400px;
}
.card{
  background-color:azure;
}
</style>
