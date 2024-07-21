const express = require('express')
const StudentService = require('../services/studentService')

const studentRouter = express.Router()

studentRouter.get('/getAllStudents', (req, res) => {
  StudentService.getAllStudents().then((students) => {
    res.send(students)
  })
})

studentRouter.post('/getOneStudent', (req, res) => {
  const { id } = req.body

  StudentService.getStudentById(id).then((result) => {
    res.send(result)
  })
})

studentRouter.post('/getStudents', (req, res) => {
  const { name, sex, age, page, limit } = req.body

  StudentService.getStudentByCondition({ name, sex, age, page, limit }).then((result) => {
    res.send(result)
  })
})

studentRouter.post('/addStudent', (req, res) => {
  const { name, age, sex, address, class_id } = req.body

  StudentService.addStudent({ name, age, sex, address, class_id }).then((result) => {
    res.send(result)
  })
})

studentRouter.post('/deleteStudent', (req, res) => {
  const { id } = req.body

  StudentService.deleteStudentById(id).then((result) => {
    res.send(result)
  })
})

studentRouter.post('/updateStudent', (req, res) => {
  const { name, age, address, id } = req.body

  StudentService.updateStudent({ name, age, address, id }).then((result) => {
    res.send(result)
  })
})

module.exports = studentRouter
