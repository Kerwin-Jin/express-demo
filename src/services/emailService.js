const nodemailer = require('nodemailer')

const config = {
  host: 'smtp.qq.com',
  port: 465,
  auth: {
    // user: '',
    // pass: ''
  }
}

const transporter = nodemailer.createTransport(config)

module.exports = {
  sendEmail ({ subject, to, text, html, from = '' }) {
    const mail = {
      // 发件人 邮箱  '昵称<发件人邮箱>'
      from,
      // 主题
      subject,
      // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
      to,
      // 内容
      text
      // 这里可以添加html标签
      // html: '<a href="https://www.bilibili.com"></a>'
    }

    if (html) {
      Object.assign(mail, { html })
    }

    transporter.sendMail(mail, function (error, info) {
      if (error) {
        return console.log(error, '发送失败')
      }
      transporter.close()
      console.log('mail sent:', info.response, '发送成功')
    })
  }
}
