const express = require('express')
const StudentService = require('../services/studentService')
const bookService = require('../services/bookService')

const bookRouter = express.Router()

bookRouter.post('/getOneBook', (req, res) => {
  const { id } = req.body

  StudentService.getStudentById(id).then((result) => {
    res.send(result)
  })
})

bookRouter.get('/getBooks', (req, res) => {
  const { title, author, page, limit } = req.body
  bookService.getBooks({ title, author, page, limit, res })
})

bookRouter.post('/addBook', (req, res) => {
  bookService.addBook(req, res)
})

module.exports = bookRouter
