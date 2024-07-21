const Mock = require('mockjs')
const StudentModel = require('../model/student')

const { students } = Mock.mock({
  'students|500': [{
    name: '@cname',
    'age|23-27': 0,
    address: '@county(true)',
    'class_id|1-16': 1,
    'sex|0-1': 0
  }]
})

console.log(students)
// StudentModel.bulkCreate(students)
