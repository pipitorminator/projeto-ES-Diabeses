<template>
    <body>
        <div id="fundo-externo"> 
        <div id="fundo"> 
            <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
        </div>
        </div>
        <div class="container">
            <div v-for="perfilCM in perfilsCMs" :key="perfilCM.id" @click="onLoadPerfilCM(perfilCM.id)">
                <br>
                <div class="card flex-row flex-wrap">
                    <div class="card-header border-0">
                        <img :src="perfilCM.imgUrl" alt="" height="150" width="250">
                    </div>
                    <div class="card-block px-2">
                        <h4 class="card-title">{{ perfilCM.title }}</h4>
                        <br>
                        <p class="card-text">
                            <b>Endereço:</b> {{ perfilCM.endereco }}
                        </p>
                        <p class="card-text">
                            <b>Avaliacao:</b> {{ perfilCM.avaliacao }}
                        </p>
                    </div>
                    <div class="w-100"></div>
                    
                </div>
                <br>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data () {
        return {
            perfilsCMs: [
                {   id: '0',
                    imgUrl: 'https://www.endocrino.org.br/static/images/logo.png',
                    endereco: 'Rui Barbosa, 472 - Graças, Recife - PE, 50050-290',
                    title: 'Unidade de Endocrinologia E Diabetes',
                    avaliacao: '4,5/5,0'
                },
                {   id: '1',
                    imgUrl: 'http://lucianoteixeira.med.br/geral/imagens/template/marca.jpg',
                    endereco: 'R. Coelho Leite, 79 - Santo Amaro, Recife - PE, 50100-140',
                    title: 'Dr. Luciano Teixeira',
                    avaliacao: '4,3/5,0'
                },
                {   id: '2',
                    imgUrl: 'https://scontent.frec26-1.fna.fbcdn.net/v/t1.0-9/p960x960/41974131_765065366997367_751316211022692352_o.png?_nc_cat=109&_nc_oc=AQk5F2zdMLaXg5n-GgjH-MVb0IP-Ge3Q9iyXmU-xtdURWeyxn4clf1gWl4-wh2LVl10&_nc_ht=scontent.frec26-1.fna&oh=92ae16cb502515c9d13614d2e36b72c4&oe=5E5ACBC3',
                    endereco: 'Av. Dr. Belmino Correia, 567 - Bairro Novo do Carmelo, Camaragibe - PE, 54762-303',
                    title: 'Clinica de Fisioterapia Cavalcante',
                    avaliacao: '3,3/5,0'
                },
                {   id: '3',
                    imgUrl: 'https://scontent.frec26-1.fna.fbcdn.net/v/t1.0-9/74604402_2625076214201947_3578321413905317888_n.png?_nc_cat=108&_nc_oc=AQm-h8PLDW8Ja-75mipECaKDBLVuMzkPCn-RSgVaT1ybgm6ONaLZVzkC7JOzzilrBvY&_nc_ht=scontent.frec26-1.fna&oh=519f082f8f4f7e069c7c47c846b8bfe5&oe=5E5F1D10',
                    endereco: 'Av. Dr. Belmino Correia, 2585 - Timbi, Camaragibe - PE, 54765-000',
                    title: 'RADCLIN Clínica Radiológica',
                    avaliacao: '4,2/5,0'
                },
                {   id: '4',
                    imgUrl: 'http://blog.arqconcursos.com.br/wp-content/uploads/2015/12/concurso-engenheiro-ufpe.jpeg',
                    endereco: 'Av. Prof. Moraes Rego, 1235 - Cidade Universitária, Recife - PE, 50670-901',
                    title: 'Hospital das Clínicas da Universidade Federal de Pernambuco',
                    avaliacao: '4,2/5,0'
                },
                {   id: '5',
                    imgUrl: 'https://scontent.frec26-1.fna.fbcdn.net/v/t1.0-9/p960x960/49239516_2341227419244641_1347570053821759488_o.png?_nc_cat=110&_nc_oc=AQk8aQZYG7HdPYGXHTzIUa1xYgGr_CBFVtg8K-t2gv54Ujh4_6-L_wB7B84QlMYuLts&_nc_ht=scontent.frec26-1.fna&oh=17fc618ad8160e3def51d6eba5244c74&oe=5E5E38CF',
                    endereco: 'Av. Dr. Belmino Correia, 10 - 1º andar - Bairro Novo do Carmelo, Camaragibe - PE, 54759-000',
                    title: 'MultiOrto',
                    avaliacao: '3,3/5,0'
                },
                {   id: '6',
                    imgUrl: 'https://scontent.frec26-1.fna.fbcdn.net/v/t1.0-9/44867680_1899763406985096_1002644657663901696_n.png?_nc_cat=102&_nc_oc=AQm8BlJpzoUvjbUS1rGUi_js_s85iWtbAXo8czs-Wh6BxSGjMSrLKBR4A0G_J9-mqaI&_nc_ht=scontent.frec26-1.fna&oh=4856fffcc12e87fe21cf901556981e0a&oe=5E478D0F',
                    endereco: 'Bloco 16 - Apartamento 102, Av. Um, s/n - Curado IV, Jaboatão dos Guararapes - PE, 54270-090',
                    title: 'Mary Exames Clínica Popular',
                    avaliacao: '3,6/5,0'
                },
                {   id: '7',
                    imgUrl: 'https://images.linkmercado.com.br/a/808/345/000/logotl-05222945-A01.jpg',
                    endereco: 'R. Leandro Barreto, 1384 - Jardim São Paulo, Recife - PE, 50910-220',
                    title: 'Uniclínica',
                    avaliacao: '4,3/5,0'
                }
            ]
        }
    },
    methods: {
        onLoadPerfilCM(id) {
            this.$router.push('/perfil-clinica-medico' + "/" + id)
        }
    }
}
</script>

<style scoped>

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
.card {
    background-color:rgb(240, 240, 240,0.8);
}
.card:hover {
    box-shadow: 5px 5px 5px #2c3e50;
}


</style>