const express = require('express')
const CaptchaService = require('../services/captchaService')

const captchaRouter = express.Router()

captchaRouter.get('/getCaptcha', (req, res) => {
  CaptchaService.getCaptcha(req).then((data) => {
    if (data) {
      res.send(data)
    }
  })
})

module.exports = captchaRouter
