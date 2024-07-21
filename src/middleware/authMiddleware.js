const { verifyToken } = require('../utils/jwt')

module.exports = (req, res, next) => {
  if (req.path === '/api/admin/login') {
    next()
  } else {
    verifyToken(req, res, next)
  }
}
