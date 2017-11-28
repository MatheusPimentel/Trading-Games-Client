<template>
  <div class="container">
    <div>
      <b-card title="Meu Cadastro"
              tag="article"
              style="max-width: 90rem;"
              class="mb-10">
        <p>Respeitamos a sua privacidade. Asseguramos que seus dados não serão fornecidos a terceiros.</p>
        <hr/>

        <div style="padding-bottom: 10px; padding-top: 10px">
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

        <hr />

        <div style="margin-bottom: 10px; margin-top: 10px">
          <b-col cols="5">
            <h5>Quer alterar a sua senha?</h5>
            <p>Nova Senha:</p>
            <b-form-input v-model="novaSenha"
                          type="password"
                          placeholder="Digite sua nova senha"></b-form-input>
          </b-col>
        </div>

        <div style="margin-bottom: 10px">
          <b-col cols="5">
            <p>Repetir nova senha:</p>
            <b-form-input v-model="alterUser.password"
                          type="password"
                          placeholder="Repita sua nova senha"></b-form-input>

            <!--alert-->
            <b-alert :show="senhasDiferentes" variant="danger"  style="margin-top: 5px">Senhas não são iguais</b-alert>
          </b-col>

        </div>
        <!--  botão alterar senha -->
        <b-button href="#" variant="warning" @click="alterarUsuario()">Alterar Cadastro</b-button>


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
        alterUser: {},
        novaSenha: '',
        show: false
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
    computed: {
      senhasDiferentes () {
        console.log(this.novaSenha)
        console.log(this.alterUser.password)
        if (this.novaSenha !== this.alterUser.password) {
          return true
        }
      }
    }
  }
</script>

<style>
  div.container {
    padding-top: 20px;
  }
</style>
