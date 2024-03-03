import request from '@/utils/request'
//商品添加到购物车
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
// 获取购物车列表数据
export const getCartListApi = () => {
  return request.get('/cart/list')
}
// 更新购物车数量
export const postCartUpdataApi = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 删除购物车中数据
export const delCartApi = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
