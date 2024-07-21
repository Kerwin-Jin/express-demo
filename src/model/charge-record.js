const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const ChargeRecordModel = sequelize.define('charge_record', {
  /** 订单id */
  order_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  /** 桩号id */
  charger_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  /** 充电端口 */
  port: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  /** 地址 */
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  /** 已充时间 单位：分钟 */
  charged_time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  /** 预充时间 单位：分钟 */
  total_time: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  /** 订单创建时间 */
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: 'deleted_at',
  paranoid: true,
  tableName: 'charge_records'
})

module.exports = ChargeRecordModel
