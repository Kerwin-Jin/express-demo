const validate = require('validate.js')

function validateTest () {
  // 要验证的对象
  const obj = {
    name: 'fhsjkdhfkjsdhfksdhfsjdhf',
    age: 18,
    email: '13427348@qq.com'
  }

  // 验证规则
  const rules = {
    name: {
      // presence:true,
      presence: {
        allowEmpty: false
      },
      type: 'string',
      length: {
        minium: 6,
        maximum: 10
      }
    }
  }
  const validateResult = validate.validate(obj, rules)
  console.log('%c Line:13 🍞 validateResult', 'color:#2eafb0', validateResult)
}

validateTest()
