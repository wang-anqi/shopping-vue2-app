import axios from 'axios'
//非组件中 toast的使用
import { Toast } from 'vant'
const baseURL = 'http://cba.itlike.com/public/index.php?s=/api/'

const request = axios.create({
  baseURL,
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    Toast.loading({
      message: '请求中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    })
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    const res = response.data
    if (res.status != 200) {
      Toast(res.message)
      return Promise.reject(res.message)
    } else {
      // 响应后 清除 loading 中的效果
      Toast.clear()
    }
    // 对响应数据做点什么
    return res
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
