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
// 添加收货地址  暂时定下来
export const addAddressApi = () => {
  return request.post('/address/add', {
    form: {
      name: '钱钱',
      phone: '18512349876',
      region: [
        {
          value: 782,
          label: '上海'
        },
        {
          value: 783,
          label: '上海市'
        },
        {
          value: 785,
          label: '徐汇区'
        }
      ],
      detail: '北京路1号楼8888室'
    }
  })
}
