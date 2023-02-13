import { createStore } from 'vuex'

export default createStore({
  state: {
    barcode: '',
  },
  getters: {},
  mutations: {
    changeBarcode(state, newBarcode) {
      state.barcode = newBarcode
    },
  },
  actions: {},
  modules: {},
})
