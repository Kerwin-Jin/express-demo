const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const AdminModel = sequelize.define('admin', {
  login_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  login_pwd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // tableName:'administer', 指定表名，
  // freezeTableName: true  模型名是啥就是啥，不会主动给你加复数，比如这里的模型名是admin，加了这个配置之后该库就不会给你把表名设为admins
  createdAt: false,
  updatedAt: false,
  paranoid: true
})

// AdminModel.sync({alter:true}).then(res=>{
//   console.log('同步完成')
// })

module.exports = AdminModel
