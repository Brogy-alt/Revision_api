import { createStore } from 'vuex'

export default createStore({
  state: {
    Products : []
  },
  getters: {
    Products(items) {
      return items.Products
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
