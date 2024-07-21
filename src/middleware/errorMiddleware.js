module.exports = (err, req, res, next) => {
  if (err) {
    res.send({
      status: 500,
      prompts: err.message || '服务器内部出现错误',
      message: ''
    })
  } else {
    next()
  }
}
