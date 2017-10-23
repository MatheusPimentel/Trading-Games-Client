<template>
  <div>
    <!-- navegação superior -->
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">Trading Games</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar class="ml-auto">

          <!--form de login-->
          <b-nav-form>
            <b-form-input v-model="usuarioLogin.userEmail" size="sm" class="mr-sm-2" type="text" placeholder="Email"/>
            <b-form-input v-model="usuarioLogin.userPassword" size="sm" class="mr-sm-2" type="password" placeholder="Senha"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="success" @click="login()">Entrar</b-button>
          </b-nav-form>
        </b-nav>

      </b-collapse>
    </b-navbar>

    <!--form cadastrar-->
    <div class="container">
      <b-card title="Cadastre-se"
              tag="article"
              class="mb-10">
        <p class="card-text">
          <b-form>
            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Nome:" label-for="nome" @click="setFocus('nome')">
                  <b-form-input v-model="novoUsuario.userName" id="userName" type="text" required></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6">
                <b-form-group label="Sobrenome:" label-for="sobrenome" @click="setFocus('sobrenome')">
                  <b-form-input v-model="novoUsuario.userLastName" id="userLastName" type="text" required></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Email" label-for="emai1-cadastro" @click="setFocus('email-cadastro')">
                  <b-form-input v-model="novoUsuario.userEmail" id="userEmail"
                                type="email" required
                                placeholder="exemplo@gmail.com"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6">
                <b-form-group label="Senha" label-for="senha" @click="setFocus('senha')">
                  <b-form-input v-model="novoUsuario.userPassword" id="userPassword"
                                type="password" required
                                placeholder="Sua senha"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </b-form>
        </p>
        <b-button variant="primary" @click="cadastrar()">Cadastrar</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        novoUsuario: {},
        usuarioLogin: {}
      }
    },
    methods: {
      setFocus (fieldId) {
        document.getElementById(fieldId).focus()
      },
      login () {
        Axios({
          method: 'POST',
          url: 'http://localhost:8080/user/login',
          data: this.usuarioLogin
        }).then((response) => {
          if (response.data) {
            this.$router.push('/private/anuncios')
          } else {
            alert('Email ou senha inválido!')
          }
        }).catch(() => {
          alert('Erro!')
        })
      },
      cadastrar () {
        Axios({
          method: 'POST',
          url: 'http://localhost:8080/user/login',
          data: this.novoUsuario
        }).then((response) => {
          if (response.data === false) {
            this.$router.push('/private/anuncios')
          } else {
            alert('Cadastro já existe!')
          }
        }).catch(() => {
          alert('Erro!')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.container {
    margin-top: 50px;
  }
</style>
