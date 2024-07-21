const Mock = require('mockjs')
const BookModel = require('../model/book')

const data = Mock.mock({
  'books|10': [
    {
      title: '@ctitle(3, 10)',
      img_url: Mock.Random.image('200x200', Mock.Random.color(), '#FFF', '@title'),
      author: '@cname',
      public_date: '@date'
    }
  ]
})

// console.log(data)
console.log(typeof data.books[0].public_date)

// BookModel.bulkCreate(data.books).then(res=>{
//   console.log("数据插入成功")
// })
