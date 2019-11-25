<template>
  <body>
    <div id="fundo-externo"> 
      <div id="fundo"> 
        <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
      </div>
    </div>
    <div id="site">
      <h1> Diabeses </h1>
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
    </div>
  </body>
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

body {
    width: 100%;
    height: 100%;
    font-family: Arial, Tahoma, sans-serif;
}

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

#site {
    position: absolute;
    top: 200px;
    left: 40%;
    width: 1000px;
    padding: 20px;
    max-width: 1000px;
    border-radius: 6px;
    margin-left: -300px; /* por causa do posicionamento absoluto temos que usar margem negativa para centralizar o site */
    background: #FFF; /* fundo branco para navegadores que não suportam rgba */
    background: rgba(240,240,240,0.8); /* fundo branco com um pouco de transparência */
}

p {
    margin-bottom: 1.5em;
}

h1 {
  text-align: center;
  margin-bottom: 0.5em;
}

</style>
