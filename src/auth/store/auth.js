import { signIn, signOut, registerNewUser, getAuthenticatedUser } from '../utilities/authUtils'
import router from '../../router.js'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

//init store
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userId: null,
    userEmail: null,
    user: null
  },
  mutations: {
    authUser (state, user) {
      state.user = user.user
      state.userId = user.userId
      state.userEmail = user.userEmail
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.userId = null
      state.userEmail = null
      state.user = null
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
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
      if (getters.loggedIn) return dispatch('validate')
      return signIn(email, password).then((res) => {
        commit('authUser', {
          user: res.user,
          userId: res.user.uid,
          userEmail: res.user.email
        })
        setTimeout(function () {
          router.push('/dashboard')
        }, 1000)
      })
      .catch(error => console.log(error.message))
    },

    // Logs out the current user.
    logOut({ commit }) {
      commit('clearAuthData', null)
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
        dispatch('storeUser', { email, password })
        setTimeout(function () {
          router.push('/dashboard')
        }, 3000)
      })
      .catch(error => console.log(error))
    },

    validate({ commit, state }) {
      if (!state.user) return Promise.resolve(null)
      const user = getAuthenticatedUser();
      commit('authUser', user)
      setTimeout(function () {
        router.push('/dashboard')
      }, 1000)
      return user;
    },
  }
});

export default store