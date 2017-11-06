<template>
  <div class="container" style="margin-top: 20px">
    <div class="">
      <b-card title="Insira seu anúncio"
              tag="article"
              class="mb-10">
        <p class="card-text">
          <b-form>
            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 1:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif" id="file" v-model="novoAnuncio.file"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 2:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif" id="file2" v-model="novoAnuncio.file2"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 3:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif" id="file3" v-model="novoAnuncio.file3"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 4:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif" id="file4" v-model="novoAnuncio.file4"></b-form-file>
              </b-col>
            </div>
            <hr>

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
              <h4 style="margin-left: 15px; margin-top: 5px">Seu nome:</h4>
              <div class="col-md-6">
                <b-form-input id="postAuthor"
                              v-model="novoAnuncio.postAuthor"
                              type="text" required
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Numero para contato:</h4>
              <div class="col-md-6">
                <b-form-input id="postNumber"
                              v-model="novoAnuncio.postNumber"
                              type="number" required
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
        novoAnuncio: {}
      }
    },
    methods: {
      setFocus (fieldId) {
        document.getElementById(fieldId).focus()
      },
      inserirAnuncio () {
        Axios({
          method: 'POST',
          url: Constantes.API_URL + '/post/insert',
          data: this.novoUsuario
        }).then((response) => {
          if (response.data) {
            alert('Inserido com sucesso"')
            this.$router.push('private/meusanuncios')
          }
        }).catch((erro) => {
          alert('Desculpe, erro ao inserir o anuncio')
        })
      }
    }
  }
</script>

<style>

</style>
