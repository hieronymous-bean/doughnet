import Vue from 'vue'
import Router from 'vue-router'
import Container from '../layouts/Container'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      redirect: '/dashboard',
      children: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
      ]
    }
  ]
})
