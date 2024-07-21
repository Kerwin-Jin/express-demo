const ChargeRecordModel = require('./charge-record')
const AdminModel = require('./admin')

/** 创建数据表 */
// ChargeRecordModel.sync({ force: true }).then((res) => {
//   console.log('table created successfully')
// })

/** 增 */
// const ins = ChargeRecordModel.create({
//   order_id: 'CD23884972394723894',
//   charger_id: 'GHJDFKDJF2398',
//   port: 7,
//   charged_time: 233,
//   address: '北京市朝阳区来广营明天第一城7号院四号楼',
//   total_time: 300
// })
// ins.then((res) => {
//   console.log(res.toJSON())
// })

/** 查 */
// ChargeRecordModel.findAll().then((res) => {
//   console.log(res.map((i) => i.toJSON()))
// })

ChargeRecordModel.findByPk(2).then((res) => {
  console.log('%c Line:28 🌭 res', 'color:#ffdd4d', res.toJSON())
})
