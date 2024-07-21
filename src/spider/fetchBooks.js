const axios = require('axios').default
const BookModel = require('../model/book')
/**
 * 获取书籍数据
 * @returns
 */
async function getBooksData () {
  const { data } = await axios.post('https://www.zongheng.com/api2/catefine/storeSearch', {
    pageNum: 1,
    pageSize: 100
  })
  return data
}

async function init () {
  const { result: { bookList } } = await getBooksData()
  const result = bookList.map((book) => {
    return {
      title: book.name,
      img_url: book.picUrl,
      public_date: book.orderColumnInfo.includes('小时') ? '2023-03-06 00:00:00' : book.orderColumnInfo,
      author: book.authorName
    }
  })

  console.log(result)

  // BookModel.bulkCreate(result).then((res) => {
  //   console.log('插入成功')
  // })
}

init()
