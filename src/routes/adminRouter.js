const express = require('express')
const adminService = require('../services/adminService')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../utils/jwt')
const AdminRouter = express.Router()

AdminRouter.post('/login', (req, res) => {
  const { username, password, captchaCode } = req.body
  adminService.login(username, password, captchaCode, req, res)
})

AdminRouter.get('/whoami', async (req, res, next) => {
  // 解析token
  jwt.verify(req.cookies.token, 'ZEK', async function (err, decoded) {
    if (err) {
      console.log('未找到该管理员')
      res.send({
        status: 401,
        prompts: '未登录，请先登录'
      })
    }
    const { id } = decoded

    const findResult = await adminService.getAdminById(id)
    res.send({
      status: 0,
      data: findResult
    })
  })
})

AdminRouter.post('/logout', (req, res) => {
  res.cookie('token', '', { maxAge: 0 })
  res.send({
    status: 0,
    message: 'success',
    data: 'success'
  })
})

module.exports = AdminRouter
