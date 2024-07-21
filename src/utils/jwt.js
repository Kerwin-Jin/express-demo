const jwt = require('jsonwebtoken')
const { fail } = require('./responseUtils')
const SECRET_KEY = 'ZEK'
const COOKIE_KEY = 'token'

/**
 *
 * @param {*} res res
 * @param {*} maxAge 过期时间，单位秒
 * @param {*} payload 加密信息
 */
exports.publicToken = function (res, maxAge = 3600 * 24, payload = {}) {
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: maxAge
  })

  // 添加authorization header
  res.setHeader('authorization', 'Bear ' + token)
  // 添加到cookie, maxAge为毫秒，往cookie里种token
  res.cookie(COOKIE_KEY, token, { maxAge: maxAge * 1000, path: '/', httpOnly: true })
}

exports.verifyToken = function (req, res, next) {
  const token = req.cookies[COOKIE_KEY] || req.header.authorization
  if (!token) {
    fail(res, 403, '还未授权，请登录')
    return
  }

  jwt.verify(token, SECRET_KEY, function (err, decoded) {
    if (err) {
      fail(res, 403, '授权认证失败')
    } else {
      next()
    }
  })
}
