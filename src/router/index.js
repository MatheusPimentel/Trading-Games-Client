import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import PrivateTemplate from '../templates/PrivateTemplate.vue'
import Anuncios from '@/components/Anuncios.vue'

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
