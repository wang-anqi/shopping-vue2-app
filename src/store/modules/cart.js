import { delCartApi, getCartListApi, postCartUpdataApi } from '@/api/cart'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state() {
    return {
      cartList: []
    }
  },
  mutations: {
    // 设定cartList数据
    setCartList(state, newList) {
      state.cartList = newList
      // console.log(newList)
    },
    toggleCheck(state, goodsId) {
      const goods = state.cartList.find((item) => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck(state, flag) {
      state.cartList.forEach((item) => {
        item.isChecked = flag
      })
    },
    // 改变数量
    changeCount(state, { goodsId, value }) {
      const obj = state.cartList.find((item) => item.goods_id === goodsId)
      obj.goods_num = value
    }
  },
  actions: {
    // 获取购物车列表数据
    async getCartListData(context) {
      const { data } = await getCartListApi()
      data.list.forEach((item) => (item.isChecked = true))
      context.commit('setCartList', data.list)
    },
    async changeCountDataAction(context, obj) {
      const { goodsId, value, skuId } = obj
      context.commit('changeCount', {
        goodsId,
        value
      })
      await postCartUpdataApi(goodsId, value, skuId)
    },
    async delCart(context) {
      const chosenCartListRes = context.getters.chosenCartList
      const cartIds = chosenCartListRes.map((item) => item.id)
      await delCartApi(cartIds)
      Toast('删除成功')

      // 重现渲染购物车列表
      context.dispatch('getCartListData')
    }
  },
  getters: {
    // 计算选中的商品数量
    cartTotalNums(state) {
      return state.cartList.reduce((sum, item) => item.goods_num + sum, 0)
    },
    // 选中的商品列表
    chosenCartList(state) {
      return state.cartList.filter((item) => item.isChecked)
    },
    // 选中的商品的总数量
    chosenNums(state, getters) {
      return getters.chosenCartList.reduce(
        (sum, item) => item.goods_num + sum,
        0
      )
    },
    // 选中商品的总价钱 并保留两个小数位
    chosenPrice(state, getters) {
      return getters.chosenCartList
        .reduce((sum, item) => {
          return sum + item.goods_num * item.goods.goods_price_min
        }, 0)
        .toFixed(2)
    },
    // 判断总选 是否选中
    isAllChosen(state) {
      return state.cartList.every((item) => item.isChecked)
    }
  }
}
