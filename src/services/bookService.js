const BookModel = require('../model/book')
const { Op } = require('sequelize')
const { successResponse, failResponse, success, fail } = require('../utils/responseUtils')

module.exports = {
  async getBooksById (id) {
    const res = await BookModel.findByPk(id)
    if (res) {
      return successResponse({
        data: res.toJSON()
      })
    }
    return failResponse(501, '未找到该同学')
  },

  async getBooks ({ title, author, page = 1, limit = 10, res }) {
    const condition = {}
    if (title) {
      condition.title = {
        [Op.like]: '%' + title + '%'
      }
    }
    if (author) {
      condition.author = {
        [Op.like]: '%' + author + '%'
      }
    }
    const { count, rows } = await BookModel.findAndCountAll({
      attributes: ['id', 'title', 'img_url', 'public_date', 'author'],
      where: condition,
      offset: (page - 1) * limit,
      limit,
      order: [['id', 'DESC']]
    })
    success(res, {
      total: count,
      list: JSON.parse(JSON.stringify(rows)),
      page_num: count < (page - 1) * limit ? 1 : page,
      page_size: limit
    })
  },

  async addBook (req, res) {
    const { title, img_url, public_date, author } = req.body
    if (!title || !img_url || !public_date || !author) {
      fail(res, 401, '请填写完整信息')
      return
    }

    const result = await BookModel.create({
      title, img_url, public_date, author
    })
    if (result) {
      success(res, '添加成功')
      return
    }

    fail(res, '添加失败')
  }

}
