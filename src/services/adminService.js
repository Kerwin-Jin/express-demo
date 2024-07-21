const AdminModel = require('../model/admin')
const validate = require('validate.js')
const { CaptchaStore } = require('../utils/captchaStore')
const { fail, success } = require('../utils/responseUtils')
const { publicToken } = require('../utils/jwt')

module.exports = {
  addAdmin (adminObj) {
    validate.validate(adminObj)
    return AdminModel.create(adminObj)
  },
  async deleteAdmin (adminId) {
    // 方式1：得到一个实例
    // const ins = await AdminModel.findByPk(adminId)
    // if(!ins){
    //   console.log('未找到管理员')
    //   return

    // }
    // await ins.destroy()

    // 方式2: 直接删除
    AdminModel.destroy({
      where: {
        id: adminId
      }
    })
  },
  async updateAdmin (adminObj) {
    await AdminModel.update(adminObj, {
      where: {
        id: adminObj.id
      }
    })
  },

  /**
   *
   * 登录函数
   * @param {用户名} name
   * @param {密码} pwd
   * @returns
   */
  async login (name, pwd, captcha, req, res) {
    const requestHost = req.headers.host
    const codeValue = CaptchaStore.get(requestHost)
    if (!captcha) {
      fail(res, 401, '请填写验证码')
      return
    }
    if (!codeValue) {
      // 都没有验证码，拿了个假的验证码来请求，进行拦截
      fail(res, 401, '非法用户，拒绝响应')
      return
    }
    if (captcha.toLocaleLowerCase() !== codeValue.toLocaleLowerCase()) {
      fail(res, 401, '验证码错误')
      return
    }
    const result = await AdminModel.findOne({
      where: {
        login_id: name,
        login_pwd: pwd
      }
    })
    if (result) {
      // 登录成功，添加jwt
      publicToken(res, 3600, result.toJSON())
      // 登录成功之后就把Map中保存的记录删除，节省内存
      CaptchaStore.delete(requestHost)
      success(res, 'success')
      return
    }
    fail(res, 401, '用户名或者密码错误')
  },

  async getAdminById (id) {
    const result = await AdminModel.findByPk(id, {
      attributes: ['id', 'login_id', 'name']
    })
    if (result) {
      return result.toJSON()
    }
    return null
  }

}
