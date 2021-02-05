import { createRouter, createWebHistory } from 'vue-router'

import Container from './layouts/Container.vue'
import Dashboard from './views/Dashboard.vue'
import Accounts from './views/Accounts.vue'
import Transactions from './views/Transactions.vue'
import Tools from './views/Tools.vue'

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
        ]
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router