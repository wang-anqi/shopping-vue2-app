import request from '@/utils/request'
//根据搜索关键词 返回商品列表
export const getSearchGoodsListApi = (paramsObj) => {
  const { sortType, categoryId, goodsName } = paramsObj
  return request.get('/goods/list', {
    params: {
      // all-按综合搜索(默认)，sales-按销量搜索，price-按价格搜索
      sortType,
      categoryId,
      goodsName,
      page: 1
    }
  })
}
