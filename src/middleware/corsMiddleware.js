module.exports = function (req, res, next) {
  // 处理跨域问题，跨域问题包括三种情况：1.简单请求 2.预检请求 3.附带身份凭证的请求

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers'])
    res.setHeader('access-control-allow-method', req.headers['access-control-request-method'])
  }

  // 处理附带身份凭证的请求
  res.setHeader('access-control-allow-credentials', true)

  // 处理简单请求
  if ('origin' in req.headers) {
    res.setHeader('access-control-allow-origin', req.headers.origin)
  }
  next()
}
