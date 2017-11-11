<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">Trading Games</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#" @click="irAnuncio()">Início</b-nav-item>
          <b-nav-item href="#" @click="irMeusAnuncios()">Meus anúncios</b-nav-item>
          <b-nav-item href="#" @click="irInserirAnuncio()">Inserir anúncio</b-nav-item>
        </b-nav>

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Usuário</em>
            </template>
            <b-dropdown-item href @click="irUsuario()">Meu Cadastro</b-dropdown-item>
            <b-dropdown-item href @click="sair()">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: 'private-template',
    methods: {
      irUsuario () {
        this.$router.push('/private/usuario')
      },
      irAnuncio () {
        this.$router.push('/private/anuncios')
      },
      irMeusAnuncios () {
        this.$router.push('/private/meusanuncios')
      },
      irInserirAnuncio () {
        this.$router.push('/private/inseriranuncio')
      },
      sair () {
        this.$store.commit('finalizarSessao', undefined)
        this.$router.push('/login')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
