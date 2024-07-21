const AdminService = require('../services/adminService')
const StudentService = require('../services/studentService')

AdminService.addAdmin({
  login_id: '234273842',
  login_pwd: '2378472',
  name: '元宝2'
}).then((res) => {
  console.log('添加成功', res)
})

// (async ()=>{
//   adminService.deleteAdmin(3)

//   adminService.updateAdmin({id:1, name:'哈哈哈'})
// })()

// AdminService.login('zek_admin12', 'fhSJdf33').then(res=>{
//   console.log(res)
// })

// AdminService.getAdminById(8).then(res=>{
//   console.log(res)
// })

// studentService.getStudents(3,10,0).then(res=>{

//   console.log(res)
// })
