import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import PrivateTemplate from '../templates/PrivateTemplate.vue'
import Anuncios from '@/components/Anuncios.vue'
import Anuncio from '@/components/Anuncio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/private/*',
      name: 'PrivateTemplate',
      redirect: '/private/anuncios',
      component: PrivateTemplate,
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
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    }
  ]
})
