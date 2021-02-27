import { createRouter, createWebHistory } from 'vue-router'

// app
import Container from './app/layouts/Container.vue'
import Dashboard from './app/views/Dashboard.vue'
import Profile from './app/views/Profile.vue'
import Settings from './app/views/Settings.vue'

// auth
import Authorization from './auth/layouts/Authorization.vue'
import Login from './auth/views/Login.vue'
import Register from './auth/views/Register.vue'
import store from './auth/store/auth.js'

// accounts
import Accounts from './accounts/views/Accounts.vue'

// bills
import Bills from './bills/views/Bills.vue'

// budgets
import Budgets from './budgets/views/Budgets.vue'

// goals
import Goals from './goals/views/Goals.vue'

// tools
import Tools from './tools/views/Tools.vue'

// transactions
import Transactions from './transactions/views/Transactions.vue'


const routes = [
  { 
    path: '/',
    name: 'Container',
    component: Container,
    meta: { requiresAuth: true },
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
        props: { accountData: 'accountData', accountTypeData: 'accountTypeData'},
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
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings
      }
    ]
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user) {
      next()
      return
    }
    next('/auth/login')
  } else {
    next()
  }
})

export default router