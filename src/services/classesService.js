const ClassesModel = require('../model/classes')
const { successResponse, failResponse } = require('../utils/responseUtils')

module.exports = {
  async getAllClasses () {
    const { count, rows } = await ClassesModel.findAndCountAll({ attributes: ['id', ['name', 'class_name'], 'open_date'] })

    return successResponse({
      total: count,
      // result是一个普通数组，没有toJSON方法，所以这里用JSON转换一下
      list: JSON.parse(JSON.stringify(rows))
    })
  }
}
