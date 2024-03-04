import request from '@/utils/request'

// 获取地址列表
export const getAddressListApi = () => {
  return request.get('/address/list')
}
// 获取默认地址ID
export const getAddressDefaultIdApi = () => {
  return request.get('/address/defaultId')
}
// 获取地址详情
export const getAddressDetailApi = (addressId) => {
  return request.get('/address/detail', {
    params: {
      addressId
    }
  })
}
