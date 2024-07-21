const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const BookModel = sequelize.define('book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  public_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  deletedAt: 'deleted_at', // 给deleteAt列设置列名字
  paranoid: true // 这个配置设置为true表示该表的数据不会真正的删除，而是增加一列deleteAt，记录删除的时间
})

// BookModel.sync({force:true}).then(res=>{
//   console.log("书籍表创建成功")
// })

module.exports = BookModel
