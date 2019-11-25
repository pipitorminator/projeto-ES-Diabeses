<template>

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