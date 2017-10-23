<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">Trading Games</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-6" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Usuário</em>
            </template>
            <b-dropdown-item href="#">Configurações</b-dropdown-item>
            <b-dropdown-item href="#">Meus Anúncios</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: 'private-template'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
