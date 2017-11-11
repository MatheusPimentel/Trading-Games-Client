<template>
  <div class="container">
    <div>
      <b-card title="Meu Cadastro"
              tag="article"
              style="max-width: 90rem;"
              class="mb-10">
        <div>
          <p>Respeitamos a sua privacidade. Asseguramos que seus dados não serão fornecidos a terceiros.</p>
        </div>
      </b-card>

      <b-card>
        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <h5>Meus Dados</h5>
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
        <!--  botão salvar alterações -->
        <b-button href="#" variant="warning" @click="alterarUsuario()">Salvar</b-button>
      </b-card>

      <b-card style="margin-bottom: 10px">
        <h5>Quer alterar a sua senha?</h5>
        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>Senha atual:</p>
            <b-form-input v-model="alterUser.password"
                          type="password"
                          placeholder="Digite sua senha atual"></b-form-input>
          </b-col>
        </div>

        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>Nova Senha:</p>
            <b-form-input v-model="alterUser.password"
                          type="password"
                          placeholder="Digite sua nova senha"></b-form-input>
          </b-col>
        </div>

        <div style="padding-bottom: 10px">
          <b-col cols="5">
            <p>Repetir nova senha:</p>
            <b-form-input v-model="alterUser.password"
                          type="password"
                          placeholder="Repita sua nova senha"></b-form-input>
          </b-col>
        </div>
        <!--  botão alterar senha -->
        <b-button href="#" variant="warning" @click="alterarUsuario()">Alterar Senha</b-button>
      </b-card>

    </div>
  </div>
</template>

<script>
//  importacao do axios e do constantes
  import Axios from 'axios'
  import Constantes from '../util/contantes.js'

  export default {
//    retorna o objeto dos usuarios para poder ser manipulado
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
          this.alterUser = response.data
          console.log(this.alterUser)
          if (response.data) {
            this.$store.commit('mudaSessao', response.data)
            alert('Alteração realizada com sucesso!')
          }
        }).catch((err) => {
          alert(err)
        })
      }
    },
    mouted () {
      this.alterarUsuario()
    }
  }
</script>

<style>
  div.container {
    padding-top: 20px;
  }
</style>
