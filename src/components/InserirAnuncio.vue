<template>
  <div class="container">
    <div class="container">
      <b-card title="Cadastre-se"
              tag="article"
              class="mb-10">
        <p class="card-text">
          <b-form>
            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Nome:" label-for="nome" @click="setFocus('nome')">
                  <b-form-input id="userName" type="text" required></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6">
                <b-form-group label="Sobrenome:" label-for="sobrenome" @click="setFocus('sobrenome')">
                  <b-form-input id="userLastName" type="text" required></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Email" label-for="emai1-cadastro" @click="setFocus('email-cadastro')">
                  <b-form-input id="userEmail"
                                type="email" required
                                placeholder="exemplo@gmail.com"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6">
                <b-form-group label="Senha" label-for="senha" @click="setFocus('senha')">
                  <b-form-input id="userPassword"
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
  export default {
    methods: {
      setFocus (fieldId) {
        document.getElementById(fieldId).focus()
      }
    }
  }
</script>

<style>

</style>
