const ClassesModel = require('../model/classes')
const StudentModel = require('../model/student')
const { Op } = require('sequelize')
const { successResponse, failResponse } = require('../utils/responseUtils')

module.exports = {
  async getAllStudents (page = 1, limit = 10) {
    const { count, rows } = await StudentModel.findAndCountAll({ attributes: ['id', 'name', 'age', ['sex', 'gender'], 'address'], limit, offset: (page - 1) * limit })

    return successResponse({
      total: count,
      // result是一个普通数组，没有toJSON方法，所以这里用JSON转换一下
      list: JSON.parse(JSON.stringify(rows))
    })
  },

  async getStudentById (id) {
    const res = await StudentModel.findByPk(id)
    if (res) {
      return successResponse({
        data: res.toJSON()
      })
    }
    return failResponse(501, '未找到该同学')
  },

  async getStudentByCondition ({ name, age, sex, page = 1, limit = 10 }) {
    const condition = {}
    if (age > -1) {
      condition.age = {
        [Op.eq]: age
      }
    }
    if ([0, 1].includes(sex)) {
      condition.sex = sex
    }
    if (name) {
      condition.name = {
        [Op.like]: '%' + name + '%'
      }
    }
    const { count, rows } = await StudentModel.findAndCountAll({
      attributes: ['id', 'name', 'age', ['sex', 'gender'], 'address'],
      include: [{
        model: ClassesModel,
        attributes: [['name', 'class_name']]
      }],
      where: condition,
      offset: (page - 1) * limit,
      limit,
      order: [['id', 'DESC']]
    })

    return successResponse({
      total: count,
      list: JSON.parse(JSON.stringify(rows)),
      page_num: count < (page - 1) * limit ? 1 : page,
      page_size: limit
    })
  },

  async addStudent ({ name, age, address, sex, class_id }) {
    if (!class_id) {
      return failResponse(501, '班级id不能为空')
    }
    const res = await StudentModel.create({
      name, age, address, sex, class_id
    })
    if (res) {
      return successResponse('添加成功')
    }

    return failResponse(501, '添加失败')
  },

  async deleteStudentById (id) {
    if (!id) {
      return failResponse(501, 'id不能为空')
    }
    const findStudent = await StudentModel.findByPk(id)
    if (!findStudent) {
      return failResponse(501, '未找到id为' + id + '的学生')
    }
    const res = await StudentModel.destroy({ where: { id } })
    if (res) {
      return successResponse('删除成功')
    }
    return failResponse(501, '删除失败')
  },

  async updateStudent ({ id, name, age, address }) {
    if (!id) {
      return failResponse(501, 'id不能为空')
    }
    const res = await StudentModel.update({ name, age, address }, { where: { id } })
    if (res) {
      return successResponse('修改成功')
    }

    return failResponse('修改失败')
  }

}
