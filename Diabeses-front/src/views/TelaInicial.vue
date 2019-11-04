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
        <b-card-text>texto falando sobre o projeto</b-card-text>
        
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
</style>
