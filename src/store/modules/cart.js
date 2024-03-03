import { getCartListApi } from '@/api/cart'

export default {
  namespaced: true,
  state() {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList(state, newList) {
      state.cartList = newList
    }
  },
  actions: {
    async getCartListData(context) {
      const { data } = await getCartListApi()
      data.list.forEach((item) => (item.isChecked = true))
      context.commit('setCartList', data.list)
    }
  },
  getters: {}
}
