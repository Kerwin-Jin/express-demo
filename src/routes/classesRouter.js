const express = require('express')
const StudentService = require('../services/studentService')
const ClassesService = require('../services/classesService')

const ClassesRouter = express.Router()

ClassesRouter.get('/getAllClasses', (req, res) => {
  ClassesService.getAllClasses().then((classes) => {
    res.send(classes)
  })
})
module.exports = ClassesRouter
