import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import PrivateTemplate from '../templates/PrivateTemplate.vue'
import Anuncios from '@/components/Anuncios.vue'
import Anuncio from '@/components/Anuncio.vue'
import Usuario from '@/components/Usuario.vue'
import MeusAnuncios from '@/components/MeusAnuncios.vue'
import InserirAnuncio from '@/components/InserirAnuncio.vue'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/private/*',
      name: 'PrivateTemplate',
      redirect: '/private/anuncios',
      component: PrivateTemplate,
      beforeEnter (to, from, next) {
        if (store.state.sessao) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: '/private/anuncios',
          name: 'Anuncios',
          component: Anuncios
        },
        {
          path: '/private/anuncios/anuncio',
          name: 'Anuncio',
          component: Anuncio
        },
        {
          path: '/private/usuario/:id',
          name: 'Usuario',
          component: Usuario
        },
        {
          path: '/private/meusanuncios',
          name: 'MeusAnuncios',
          component: MeusAnuncios
        },
        {
          path: '/private/inseriranuncio',
          name: 'InserirAnuncio',
          component: InserirAnuncio
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      beforeEnter (to, from, next) {
        if (store.state.sessao) {
          next(from.name)
        } else {
          next()
        }
      }
    }
  ]
})
