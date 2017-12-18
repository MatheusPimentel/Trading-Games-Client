<template>
  <div class="container" style="margin-top: 20px">
    <div class="">
      <b-card title="Insira seu anúncio"
              tag="article"
              class="mb-10"
              id="inserirAnuncio">
        <p class="card-text">
          <b-form>
            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 1:</h4>
              <b-col cols="6">
                <b-form-file accept="image/*" id="file" multiple choose-label="Procurar" v-model="files"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <div class="container">
                <h4>Descrição</h4>
                <b-form-textarea id="postDescription"
                                 v-model="novoAnuncio.postDescription"
                                 placeholder="Descrição do produto"
                                 :rows="3"
                                 required
                                 :max-rows="6">
                </b-form-textarea>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Título:</h4>
              <div class="col-md-6">
                <b-form-input id="postTitle"
                              v-model="novoAnuncio.postTitle"
                              type="text" required
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Categoria:</h4>
              <div class="col-md-6">
                <b-form-input id="postCategory"
                              v-model="novoAnuncio.postCategory"
                              type="text" required
                              placeholder="Ex: Jogos/Peças para Xbox, Pc, PS4, Wii"
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Valor:</h4>
              <div class="col-md-6">
                <b-form-input id="productPrice"
                              v-model="novoAnuncio.productPrice"
                              type="number" required
                              placeholder=" 00,00"
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Numero para contato:</h4>
              <div class="col-md-6">
                <b-form-input id="contactNumber"
                              v-model="novoAnuncio.contactNumber"
                              type="text" required
                              placeholder=" DDD seguido do numero. Ex: 067981684840"
                ></b-form-input>
              </div>
            </div>
          </b-form>
        </p>
        <b-button variant="primary" @click="inserirAnuncio()">Inserir Anuncio</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Constantes from '../util/contantes.js'

  export default {
    name: 'inserirAnuncio',
    data () {
      return {
        novoAnuncio: {},
        files: null
      }
    },
    methods: {
      setFocus (fieldId) {
        document.getElementById(fieldId).focus()
      },
      inserirAnuncio () {
        const formData = new FormData()
        const arquivos = document.getElementById('file').files
        for (let i = 0; i < arquivos.length; i++) {
          formData.append('file', arquivos[i])
        }
        this.novoAnuncio.postAuthor = this.$store.state.sessao.userName
        Axios({
          method: 'POST',
          url: Constantes.API_URL + '/post/insert',
          data: this.novoAnuncio
        }).then((response) => {
          const anuncioInserido = response.data
          if (!anuncioInserido) {
            alert('Desculpe, erro ao inserir o anuncio')
            return
          }
          Axios({
            method: 'POST',
            url: Constantes.API_URL + `/post/upload?postId=${anuncioInserido.postId}`,
            data: formData
          }).then((response) => {
            alert('Anuncio inserido com sucesso')
            this.$router.push({ name: 'Anuncios' })
          }).catch((err) => {
            console.log(err.response)
            alert('Falha ao inserir a imagem do anúncio!')
          })
        }).catch((err) => {
          console.log(err.response)
          alert('Desculpe, erro ao inserir o anuncio')
        })
      }
    }
  }
</script>

<style>

</style>
