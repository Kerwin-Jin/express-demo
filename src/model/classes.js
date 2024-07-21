const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const ClassesModel = sequelize.define('classes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  open_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  deletedAt: 'deleted_at',
  paranoid: true
})

// ClassesModel.sync({force:true}).then(res=>{
//   console.log("班级表同步成功")
// })

// ClassesModel.findAll({
//   attributes:["id",["name","class_name"]]
// }).then(res=>{
//   console.log(JSON.parse(JSON.stringify(res)))
// })

module.exports = ClassesModel
