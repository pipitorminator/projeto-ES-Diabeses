<template>
    <body>
        <div id="fundo-externo"> 
        <div id="fundo"> 
            <img src="https://i.dailymail.co.uk/i/newpix/2018/02/19/19/4962620800000578-0-image-a-5_1519067319665.jpg">
        </div>
        </div>
        <div class="container">
            <div v-for="p in ps" :key="p.id">
                <br>
                <div class="card flex-wrap">
                    <div class="card-header border-0">
                        <img class="rounded mx-auto d-block" alt="Imagem responsiva" :src="p.imgUrl">
                    </div>
                    <div class="card-block text-center px-2">
                        <h4 class="card-title">{{ p.title }}</h4>
                        <br>
                        <p class="card-text">
                            <b>Endereço:</b> {{ p.endereco }}
                        </p>
                        <p class="card-text">
                            <b>Avaliacao:</b> {{ p.avaliacao }}
                        </p>
                    </div>
                    <br>
                    <div class="w-100 text-center">
                        <b-button v-b-modal.modal-prevent-closing variant="primary">Avalie</b-button>

                        <b-modal
                        id="modal-prevent-closing"
                        ref="modal"
                        title="Avaliação"
                        @show="resetModal"
                        @hidden="resetModal"
                        @ok="handleOk"
                        >
                        <form ref="form" @submit.stop.prevent="handleSubmit">
                            <b>Nota de Avaliação:</b>
                            <star-rating :increment="0.5" :star-size="20"></star-rating>
                            <br>
                            <b-form-group
                            :state="comentarioState"
                            label="Comentário:"
                            label-for="comentario-input"
                            invalid-feedback="comentario is required"
                            >
                            <b-form-input
                                id="comentario-input"
                                v-model="comentario"
                                :state="comentarioState"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </form>
                        </b-modal>
                    </div>
                    <br>

                    <div class="w-100"></div>
                </div>
                <br>
            </div>
        </div>
    </body>
</template>

<script>
import perfilsCMs from './PerfilClinicaMedico.vue'
import StarRating from 'vue-star-rating'

export default {
    data() {
        return {
            comentario: '',
            comentarioState: null,
            submittedComentarios: [],
            ps: [
                {   id: '0',
                    imgUrl: 'https://www.endocrino.org.br/static/images/logo.png',
                    endereco: 'Rui Barbosa, 472 - Graças, Recife - PE, 50050-290',
                    title: 'Unidade de Endocrinologia E Diabetes',
                    avaliacao: '4,5/5,0'
                }
            ]
        }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.comentarioState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.comentario = ''
        this.comentarioState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedComentarios.push(this.comentario)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    },
    components: {
        StarRating
    }
}
</script>

<style>

.card {
    background-color:rgb(240, 240, 240,0.9);
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

</style>