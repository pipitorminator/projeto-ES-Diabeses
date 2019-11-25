<template>
    <body>
        <div id="fundo-externo"> 
        <div id="fundo"> 
            <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
        </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="card col-md-6" id="Card">
                <div class="card-body">
                    <div id="principal">
                        <h1>Informe os dados do seu exame de glicose :</h1>
                        <div>
                            Prognostico :
                        <input type="text" size="46" name="prognostico" v-model="prognostico" placeholder="Informe o indice de glicose " >
                        <div id="app">
                            <h1>Resultado do prognostico :</h1>
                            <span v-if="prognostico<=70 && prognostico!=''"><h3> Você pode estar com hipoglicemia !</h3></span>
                            <span v-if="prognostico>70 && prognostico<=99"><h3>Suas taxas atuas são boas !</h3></span>
                            <span v-if="prognostico>=100 && prognostico<=126"><h3>Você pode estar com pré-diabetes !</h3> </span>
                            <span v-if="prognostico>126"><h3>Você pode estar com diabetes !</h3></span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  
</template>


<script>
export default{
    data(){
        
        return{
            prognostico: ''
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

#Card{
  text-align: center;
  margin-top: 50px;
  background-color:rgb(240, 240, 240,0.9);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
#principal{
    text-align: center;
}
#prognostico{
    margin-bottom: 5px;
    margin-top: 20px;
}
#app{
    margin-top: 20px;
    margin-bottom: 10px;
}
h3{
    margin-right: 10px;
}
</style>