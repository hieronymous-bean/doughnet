import { signIn, signOut, registerNewUser, getAuthenticatedUser } from '../utilities/authUtils'
import router from '../../router.js'
import Vuex from 'vuex'

//init store
const store = new Vuex.Store({
  state: {
    userId: null,
    userEmail: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.user = userData.user
      state.userId = userData.userId
      state.userEmail = userData.userEmail
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
      state.user = null
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.currentUser
    },
    authStatus(state) {
      return state.status
    }
  },
  actions: {
    init({ state, dispatch }) {
      dispatch('validate', state)
    },

    // Logs in the current user.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
      console.log(email);
      if (getters.loggedIn) return dispatch('validate')
      return signIn(email, password).then((res) => {
        localStorage.setItem('user', res.user)
        localStorage.setItem('userId', res.user.uid)
        localStorage.setItem('email', res.user.email)
        commit('authUser', {
          user: res.user,
          userId: res.user.uid,
          userEmail: res.user.email
        })
        router.push('/dashboard')
      })
      .catch(error => console.log(error.message))
    },

    // Logs out the current user.
    logOut({ commit }) {
      commit('SET_CURRENT_USER', null)
      return new Promise((resolve, reject) => {
        signOut().then((response) => {
          resolve(true);
          return response;
        }).catch((error) => {
          reject(this._handleError(error));
        })
      });
    },

    // register the user
    register({ commit, dispatch, getters }, { email, password } = {}) {
      if (getters.loggedIn) return dispatch('validate')
      return registerNewUser(email, password).then((res) => {
        console.log(res)
        commit('authUser', {
          user: res.user,
          userId: res.user.uid
        })
        localStorage.setItem('user', res.user)
        localStorage.setItem('userId', res.user.uid)
        localStorage.setItem('email', res.user.email)
        dispatch('storeUser', { email, password })
        setTimeout(function () {
          router.push('/dashboard')
        }, 3000)
      })
      .catch(error => console.log(error))
    },

    validate({ commit, state }) {
      if (!state.currentUser) return Promise.resolve(null)
      const user = getAuthenticatedUser();
      commit('SET_CURRENT_USER', user)
      return user;
    },
  }
});

export default store