const Mock = require('mockjs')
const ClassesModel = require('../model/classes')

const { data } = Mock.mock({
  'data|16': [{
    name: '前端第 @id 期',
    open_date: '@date'
  }]
})

console.log(data)

// ClassesModel.bulkCreate(data).then((res) => {
//   console.log('班级插入成功')
// })
