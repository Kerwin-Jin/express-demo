const { DataTypes } = require('sequelize')
const sequelize = require('./db')
const ClassesModel = require('./classes')

const StudentModel = sequelize.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 16
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sex: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  deletedAt: 'deleted_at',
  paranoid: true
})

StudentModel.belongsTo(ClassesModel, { foreignKey: 'class_id' })

// StudentModel.sync({force: true}).then(res=>{
//   console.log("学生表同步成功")
// })

module.exports = StudentModel
