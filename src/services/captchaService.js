const { successResponse } = require('../utils/responseUtils')
const svgCaptcha = require('svg-captcha')
const { CaptchaStore } = require('../utils/captchaStore')
module.exports = {
  async getCaptcha (req, res) {
    const { data, text } = svgCaptcha.create({ width: 100 })
    CaptchaStore.set(req.headers.host, text)
    return successResponse(data)
  }
}
