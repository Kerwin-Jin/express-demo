module.exports = {
  successResponse (data) {
    return {
      status: 0,
      message: '成功',
      prompts: '成功',
      data
    }
  },
  failResponse (status = 500, prompts = '服务器内部错误') {
    return {
      status,
      message: 'error',
      prompts,
      data: null
    }
  },
  /**
   *
   * @param {*} res response对象
   * @param {*} data 成功响应返回的数据
   */
  success (res, data) {
    const successData = {
      status: 0,
      message: '成功',
      prompts: '成功',
      data
    }
    res.send(successData)
  },
  /**
   *
   * @param {*} res response对象
   * @param {*} status 错误码
   * @param {*} prompts 错误消息
   */
  fail (res, status = 500, prompts = '服务器错误') {
    const failData = {
      status,
      message: 'error',
      prompts,
      data: null
    }
    res.send(failData)
  }
}
