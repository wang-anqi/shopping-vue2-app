const INFO_KEY = 'shopping_info'
// 获取本地存储中的个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}
// 设置本地存储中的个人信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}
// 删除本地存储中的个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
