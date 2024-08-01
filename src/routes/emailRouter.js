const express = require('express')
const StudentService = require('../services/studentService')
const emailService = require('../services/emailService')
const { success } = require('../utils/responseUtils')

const emailRouter = express.Router()

emailRouter.post('/sendEmail', (req, res) => {
  emailService.sendEmail({
    subject: 'Hello',
    to: '2444919814@qq.com',
    text: '开心每一天😄'
  })
  success(res, '发送成功')
})

module.exports = emailRouter
