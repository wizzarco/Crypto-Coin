import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      togglePassword: false,
      showModalNewsletterHome: false,
      logged: false,
      userData: "empty"
    }
  },
  mutations: {
  }
})

export default store