<template>
  <div class="container">
    <div>
      <b-card title="Configuração de usuário"
              tag="article"
              style="max-width: 90rem;"
              class="mb-10">
        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>
              <!--mostra o nome conforme a alteração, vale tambem para os outros-->
              Nome: {{ alterUser.nome }}
            </p>
            <b-form-input v-model="alterUser.nome"
                          type="text"
                          placeholder="Seu nome"></b-form-input>
          </b-col>
        </div>

        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>
              Sobrenome: {{ alterUser.lastName }}
            </p>
            <b-form-input v-model="alterUser.lastName"
                          type="text"
                          placeholder="Sobrenome"></b-form-input>
          </b-col>
        </div>

        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>
              Email: {{ alterUser.email }}
            </p>
            <b-form-input v-model="alterUser.email"
                          type="email"
                          placeholder="Email"></b-form-input>
          </b-col>
        </div>

        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>Senha:</p>
            <b-form-input v-model="alterUser.password"
                          type="password"
                          placeholder="Enter your name"></b-form-input>
          </b-col>
        </div>
        <b-button href="#" variant="warning" @click="alterarUsuario()">Salvar alterações</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
//  importacao do axios e do constantes
  import Axios from 'axios'
  import Constantes from '../util/contantes.js'

  export default {
//    retorna o objeto dos usuarios para poder ser manupulado
    data () {
      return {
        alterUser: {}
      }
    },
    methods: {
//      metodo alterar usuario chamado quando clica o botao para fazer alteracoes do usuario
      alterarUsuario () {
        Axios({
          method: 'POST',
          url: Constantes.API_URL + '/user/alter',
          data: this.alterUser
        }).then((response) => {
          if (response.data) {
            this.$store.commit('mudaSessao', response.data)
            alert('Alteração realizada com sucesso!')
          }
        }).catch((err) => {
          alert(err)
        })
      }
    }
  }
</script>

<style>
  div.container {
    padding-top: 20px;
  }
</style>
