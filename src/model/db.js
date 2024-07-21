const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('myschool', 'root', 'xskdjS@96', {
  host: 'localhost',
  dialect: 'mysql',
  logging: null
})

/**
 * 测试数据库连接是否成功
 */
// const testConnection = async () => {
//   try {
//     const res = await sequelize.authenticate()
//     console.log('%c Line:12 🍡 res', 'color:#6ec1c2', 'connection established successfully!')
//   } catch (error) {
//     console.log(error)
//   }
// }

// testConnection()

module.exports = sequelize
