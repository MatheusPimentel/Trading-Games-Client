<template>
  <div class="container">
    <div>
      <b-card title="Anuncios"
              tag="article"
              style="max-width: 90rem;"
              class="mb-10">

        <div>
          <b-nav-form id="b-nav-form" style="margin-bottom: 10px">
            <b-form-input class="mr-sm-2" type="text" placeholder="Pesquisar"/>
            <b-button class="my-2 my-sm-0" type="submit" variant="success">Procurar</b-button>
          </b-nav-form>

          <b-card>
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="150" alt="placeholder" />
              <h5 class="mt-0">Nome produto</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                in faucibus.
              </p>
              <p>
                R$: Valor
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
        pesquisar: {}
      }
    },
    methods: {
      buscar () {
        Axios({
          methos: 'POST',
          url: Constantes.API_URL + '/post/search',
          data: this.pesquisar
        })
      }
    }
  }
</script>

<style scoped>
  div.container {
    margin-top: 20px;
  }
</style>
