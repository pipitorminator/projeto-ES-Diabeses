<template>
<div id="principal2">
    <h1>Responda qual a frenquência que faz as seguintes afirmações abaixo : </h1>
    <h2>Alimentação :</h2> <br>
    <div id="Carboidratos">
        <p id="p1">Consome Caboidratos :</p>
        <input type="radio" name="tipo1" value="não consumo"> não consumo                 <br>
        <input type="radio" name="tipo1" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo1" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo1" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão1">Comfirmar</button>
    <div id="Verduraselegumes">
        <p id="p2">Consome Verduras e Legumes :</p>
        <input id="i1" type="radio" name="tipo2" value="não consumo"> não consumo                 <br>
        <input id="i2" type="radio" name="tipo2" value="uma vez por semana"> uma vez por semana   <br>
        <input id="i3" type="radio" name="tipo2" value="uma vez ao dia"> uma vez ao dia           <br>
        <input id="i4" type="radio" name="tipo2" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão2">Comfirmar</button>
    <div id="Frutas">
        <p id="p3">Consome Frutas :</p>
        <input type="radio" name="tipo3" value="não consumo"> não consumo                 <br>
        <input type="radio" name="tipo3" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo3" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo3" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão3">Comfirmar</button>  
    <div id="ÓleoseGorduras">
        <p id="p4">Consome Óleos e Gorduras :</p>
        <input type="radio" name="tipo4" value="não consumo"> não consumo                 <br>
        <input type="radio" name="tipo4" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo4" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo4" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão4">Comfirmar</button>   
     <div id="AçúcareseDoces">
        <p id="p5">Consome Açúcares e Doces :</p>
        <input type="radio" name="tipo5" value="não consumo"> não consumo                 <br>
        <input type="radio" name="tipo5" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo5" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo5" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão5">Comfirmar</button>   
    <h3>Exercícios  :</h3> <br>
    <div id="ExercíciosdeAlongamento">
        <p id="p6">Prática de Exercícios de Alongamento :</p>
        <input type="radio" name="tipo6" value="não pratico"> não pratico                 <br>
        <input type="radio" name="tipo6" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo6" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo6" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão6">Comfirmar</button>
    <div id="ExercíciosAeróbicos">
        <p id="p7">Prática de Exercícios Aeróbicos :</p>
        <input type="radio" name="tipo7" value="não pratico"> não pratico                 <br>
        <input type="radio" name="tipo7" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo7" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo7" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão7">Comfirmar</button>
    <div id="ExercíciosCaminhada">
        <p id="p8">Prática de Caminhada :</p>
        <input type="radio" name="tipo8" value="não pratico"> não pratico                 <br>
        <input type="radio" name="tipo8" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo8" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo8" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão8">Comfirmar</button>
    <div id="ExercíciosNatação">
        <p id="p9">Prática de Natação :</p>
        <input type="radio" name="tipo9" value="não pratico"> não pratico                 <br>
        <input type="radio" name="tipo9" value="uma vez por semana"> uma vez por semana   <br>
        <input type="radio" name="tipo9" value="uma vez ao dia"> uma vez ao dia           <br>
        <input type="radio" name="tipo9" value="varias vezes ao dia"> varias vezes ao dia <br>
    </div>
    <button id="botão8">Comfirmar</button>
</div>
   
</template>
<script>
import config from "../helpers/generalConfig";

export default {
  data() {
    return {

    };
  }
};
</script>
<style>
    h2{
        margin-left: -150px;
        margin-right: 130px;
    }
    h3{
        margin-left: -130px;
        margin-right: 130px;
    }
    #Carboidratos, #Verduraselegumes, #Frutas , #ÓleoseGorduras, #AçúcareseDoces{
        margin-right: 0px;
        margin-left: 0px;
    }
    #p1{
        font-weight: bold;
        margin-left: -140px;
        margin-right: 140px;
    }
    #p2{
        font-weight: bold;
        margin-left: -100px;
        margin-right: 100px;

    }
    #p3{
        font-weight: bold;
        margin-left: -130px;
        margin-right: 150px;

    }
    #p4{
        font-weight: bold;
        margin-left: -100px;
        margin-right: 90px;   
    } 
    #p5{
        font-weight: bold;
        margin-left: -90px;
        margin-right: 90px;
    } 
    #p6{
        font-weight: bold;
        margin-left: -50px;
        margin-right: 50px;
    } 
    #p7{
        font-weight: bold;
        margin-left: -80px;
        margin-right: 60px;
    }
    #p8{
        font-weight: bold;
        margin-left: -100px;
        margin-right: 100px;
    }
    #p9{
        font-weight: bold;
        margin-left: -100px;
        margin-right: 110px;
    }
    #principal2{
        text-align: center;
    }
    #botão1, #botão,#botão2, #botão3, #botão4, #botão5, #botão6, #botão7, #botão8, #botão9 {
        margin-right: 60px;
        margin-left:  -100px;
    }
    input[type=radio]{
        display: inline;
        margin-left: -220px;
        margin-right: -1px
    }


</style>
