<template>
  <div class="container">

    <!--<img :src=""/>-->
    <div>
      <b-card title="Anuncios"
              tag="article"
              style="max-width: 90rem"
              class="mb-10">

        <div>
          <b-nav-form id="b-nav-form" style="margin-bottom: 10px">
          </b-nav-form>
          <b-row class="text-center" style="margin-bottom: 10px">
            <b-col cols="4"><b-form-input class="mr-sm-2" type="text" v-model="filtro" placeholder="Pesquise pelo titulo ou descrição"/></b-col>
            <b-button class="my-2 my-sm-0" type="submit" variant="success" @click="buscar()">Procurar</b-button>
          </b-row>

          <b-card v-for="anuncio in anuncios" style="margin-bottom: 10px; cursor: pointer;" @click="irAnuncio(anuncio.postId)">
            <b-media>
              <b-img  slot="aside" :src="montarUrlImagem(anuncio.postId)" width="200" height="200" alt="Não foi possível reproduzir a imagem" />
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
      irAnuncio (id) {
        this.$router.push({
          name: 'VisualizarAnuncio',
          params: { id }
        })
      },
      montarImagem (identificador) {
        let images = []
        Axios({
          method: 'GET',
          url: Constantes.API_URL + `/post/loadFiles?postId=${identificador}`
        }).then((response) => {
          images = response.data
          console.log('deu certo')
          console.log(images[0])
        }).catch((err) => {
          console.log('deu errado')
          console.log(err.response)
        })
        return images[0]
      },
      montarUrlImagem (postId) {
        return `${Constantes.API_URL}/post/buscarImagemCapa/${postId}`
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
