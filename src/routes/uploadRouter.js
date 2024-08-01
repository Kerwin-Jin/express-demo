const express = require('express')
const path = require('path')
const multer = require('multer')
const { success } = require('../utils/responseUtils')

const getRandomString = (len = 6) => {
  return Math.random().toString(36).slice(-len)
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../resource'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + getRandomString()
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

const UploadRouter = express.Router()

UploadRouter.post('/uploadImage', upload.single('img'), (req, res) => {
  success(res, { url: 'http://localhost:8080/' + req.file.filename })
})

module.exports = UploadRouter
