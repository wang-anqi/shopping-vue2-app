export default {
  namespaced: true,
  state() {
    return {
      mode: '',
      cartIds: ''
    }
  },
  mutations: {
    setMode(state, obj) {
      const { mode, cartIds } = obj
      ;(state.mode = mode), (state.cartIds = cartIds)
    }
  }
}
