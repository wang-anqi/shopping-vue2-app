import request from '@/utils/request'

//获取图形验证码
export const getCaptchaImageApi = () => {
  return request.get('/captcha/image')
}
/**
 * /captcha/sendSmsCaptcha'
 */
export const getMsgCodeApi = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
/**
 * 验证码登录
 * mobile: 手机号码
 * smsCode: 短信验证码
 */
export const postCodeLoginApi = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
