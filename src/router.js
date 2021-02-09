import { createRouter, createWebHistory } from 'vue-router'

import Container from './layouts/general/Container.vue'
import Dashboard from './views/app/Dashboard.vue'
import Accounts from './views/app/Accounts.vue'
import Transactions from './views/app/Transactions.vue'
import Tools from './views/app/Tools.vue'
import Bills from './views/app/Bills.vue'
import Budgets from './views/app/Budgets.vue'
import Goals from './views/app/Goals.vue'

import Authorization from './layouts/auth/Authorization.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

import Staging from './views/app/Staging.vue'

const routes = [
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
          },
          {
            path: '/accounts',
            name: 'Accounts',
            component: Accounts
          },
          {
            path: '/transactions',
            name: 'Transactions',
            component: Transactions
          },
          {
            path: '/tools',
            name: 'Tools',
            component: Tools
          },
          {
            path: '/budgets',
            name: 'Budgets',
            component: Budgets
          },
          {
            path: '/bills',
            name: 'Bills',
            component: Bills
          },
          {
            path: '/goals',
            name: 'Goals',
            component: Goals
          },
        ]
    },
    {
      path: '/staging',
      name: 'Staging',
      component: Staging
    },
    {
      path: '/auth',
      name: 'Authorization',
      component: Authorization,
      redirect: '/auth/login',
      children: [
        {
          path: '/auth/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/auth/register',
          name: 'Register',
          component: Register
        },
      ]
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router