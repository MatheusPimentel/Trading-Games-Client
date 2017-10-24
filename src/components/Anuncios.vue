<template>
  <div>
    <div class="container">
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
  </div>
</template>

<script>
//  import Axios from 'axios'
  export default {
    name: 'anuncios',

    methods: {
//    IMPLEMENTAR COMO IR PRA PAGINA ANUNCIO
    }
  }
</script>

<style scoped>
  div.container {
    margin-top: 20px;
  }
</style>
