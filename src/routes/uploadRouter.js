const express = require('express')
const path = require('path')

const UploadRouter = express.Router()

UploadRouter.post('/uploadImage', (req, res) => {
  // TODO 处理文件

  res.send({
    status: 0,
    data: {
      url: 'https://localhost:8080/xxx.jpg'
    }
  })
})

module.exports = UploadRouter
