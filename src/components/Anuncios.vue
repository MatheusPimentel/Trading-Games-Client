<template>
  <div class="container">
    <div>
      <b-card title="Anuncios"
              tag="article"
              style="max-width: 90rem;"
              class="mb-10">

        <div>
          <b-nav-form id="b-nav-form" style="margin-bottom: 10px">
          </b-nav-form>
          <b-row class="text-center" style="margin-bottom: 10px">
            <b-col cols="4"><b-form-input class="mr-sm-2" type="text" v-model="filtro" placeholder="Pesquise pelo titulo ou descrição"/></b-col>
            <b-button class="my-2 my-sm-0" type="submit" variant="success" @click="buscar()">Procurar</b-button>
          </b-row>

          <b-card v-for="anuncio in anuncios" style="margin-bottom: 10px" @click="irAnuncio()">
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="150" alt="placeholder" />
              <h5 class="mt-0">{{ anuncio.postTitle }}</h5>
              <p>
                {{ anuncio.postDescription }}
              </p>
              <p>
                R$: {{ anuncio.productPrice }}
              </p>
            </b-media>
          </b-card>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Constantes from '../util/contantes.js'
  export default {
    name: 'anuncios',
    data () {
      return {
        filtro: '',
        anuncios: []
      }
    },
    methods: {
      buscar () {
        Axios({
          method: 'GET',
          url: Constantes.API_URL + `/post/search?query=${this.filtro}&category=${this.filtro}`
        }).then((response) => {
          this.anuncios = response.data
          console.log(this.anuncios)
        }).catch(() => {
          alert('falha ao buscar anuncios')
        })
      },
      irAnuncio () {
//        tratar em como levar os objetos do anuncio clicado para Anuncio
        this.$router.push('/private/anuncios/anuncio')
      }
    },
    mounted () {
      this.buscar()
    }
  }
</script>

<style scoped>
  div.container {
    margin-top: 20px;
  }
</style>
