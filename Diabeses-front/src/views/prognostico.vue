<template>
 <form formaction="http://localhost:8080/prognostico" method="POST">

    <div id="principal">
        <h1>Informe os dados do seu exame de glicose :</h1>
        <div id="prognostico">
            Prognostico :
        <input size="46" v-model="this.prognostico" placeholder="Informe o indice de glicose " >
        <button>ObterPrognostico</button>
        </div>
    </div>

</form>

  
</template>

<script>
export default {
    data(){
        return{
            prognostico:""
        }
    }

}
</script>

<style>
#principal{
    text-align: center;
}
#prognostico{
    margin-bottom: 5px;
    margin-top: 20px;
}

</style>