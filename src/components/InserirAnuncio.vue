<template>
  <div class="container">
    <div class="container">
      <b-card title="Insira seu anúncio"
              tag="article"
              class="mb-10">
        <p class="card-text">
          <b-form>
            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 1:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif" id="file"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 2:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 3:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif"></b-form-file>
              </b-col>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px">Imagem 4:</h4>
              <b-col cols="6">
                <b-form-file accept=".jpg, .png, .gif"></b-form-file>
              </b-col>
            </div>
            <hr>

            <div class="row" style="margin-bottom: 10px">
              <div class="container">
                <h4>Descrição</h4>
                <b-form-textarea id="textarea1"
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
                              type="text" required
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Categoria:</h4>
              <div class="col-md-6">
                <b-form-input id="postCategory"
                              type="text" required
                              placeholder="Ex: Jogos/Peças para Xbox, Pc, PS4, Wii"
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Valor:</h4>
              <div class="col-md-6">
                <b-form-input id="productPrice"
                              type="number" required
                              placeholder=" 00,00"
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Seu nome:</h4>
              <div class="col-md-6">
                <b-form-input id="postAuthor"
                              type="text" required
                ></b-form-input>
              </div>
            </div>

            <div class="row" style="margin-bottom: 10px">
              <h4 style="margin-left: 15px; margin-top: 5px">Numero para contato:</h4>
              <div class="col-md-6">
                <b-form-input id="postNumber"
                              type="number" required
                              placeholder=" DDD seguido do numero. Ex: 067981684840"
                ></b-form-input>
              </div>
            </div>
          </b-form>
        </p>
        <b-button variant="primary" @click="cadastrar()">Inserir Anuncio</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
//  import Axios from 'axios'
  export default {
    name: 'InserirAnuncio',
    data: {
      novoAnuncio: {
        file: null
      }
    },
    methods: {
      setFocus (fieldId) {
        document.getElementById(fieldId).focus()
      }
    }
  }
</script>

<style>
  div.container {
    margin-top: 20px;
  }
</style>
