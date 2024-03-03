import request from '@/utils/request'

export const postCartAddApi = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 获取购物车商品总数
export const getCartTotalApi = () => {
  return request.get('/cart/total')
}
