import request from '@/utils/request'

//获取分类页分类数据
export const getCategoryListApi = () => {
  return request.get('/category/list')
}
