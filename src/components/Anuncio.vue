<template>
  <div class="container">
    <div>
      <b-carousel id="carousel1" v-if="imagens.length"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
      >

        <!-- Text slides with image -->
        <b-carousel-slide id="carousel1-slide" v-for="img in imagens" :img-src="montarUrlImagem(img)"
        ></b-carousel-slide>

      </b-carousel>

    </div>

    <div id="b-card">
      <b-card no-body
              style="max-width: 70rem;">
        <h4 slot="header">{{ anuncio.postTitle }}</h4>
        <b-card-body>
          <p class="card-text">
            {{ anuncio.postDescription }}
          </p>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item>{{ anuncio.contactNumber }}</b-list-group-item>
          <b-list-group-item>{{ anuncio.productPrice }}</b-list-group-item>
          <b-list-group-item>{{ anuncio.postCategory }}</b-list-group-item>
          <b-list-group-item>{{ anuncio.postAuthor }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Constantes from '../util/contantes.js'
  export default {
    name: 'visualizarAnuncio',
    data () {
      return {
        sliding: null,
        anuncio: {},
        imagens: []
      }
    },
    methods: {
      setAnuncio (anuncio) {
        this.anuncio = anuncio
      },
      setImagens (imagens) {
        this.imagens = imagens
      },
      montarUrlImagem (img) {
        console.log(`${Constantes.API_URL}/post/loadFile/${img.id}`)
        return `${Constantes.API_URL}/post/loadFile/${img.id}`
      }
    },
    mounted () {
      const id = this.$router.history.current.params.id
      Axios({
        method: 'GET',
        url: Constantes.API_URL + `/post/${id}`
      }).then((response) => {
        this.setAnuncio(response.data)
        console.log(this.anuncio)
        Axios({
          method: 'GET',
          url: Constantes.API_URL + `/post/loadFiles?postId=${id}`
        }).then((response) => {
          this.setImagens(response.data)
        })
      }).catch(() => {
        alert('falha ao carregar o anúncio')
      })
    }
  }
</script>

<style scoped>
  div.container {
    margin-top: 20px;
  }

  div#b-card {
    padding-top: 20px;
  }

  #carousel1-slide {
    max-height: 600px;
  }
</style>
