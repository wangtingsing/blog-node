const { mongoose } = require('../db/mongodb.js');

// 提供哈希算法模块
const crypto = require('crypto');
// id自增
// const autoIncrement = require('mongoose-auto-increment');
const adminSchema = new mongoose.Schema({
  // 名字
  name: { type: String, required: true, default: '' },

  //用户类型 0：管理员 其他用户 1
  type: { type: Number, default: 1 },

  // 手机
  phone: { type: String, default: '' },
  // 头像
  avatar: { type: String, default: '' },
  // 密码
  password: {
    type: String,
    // required: true,
    default: ''
  },

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now},
  
  
});
// 自增 ID 插件配置
// adminSchema.plugin(autoIncrement.plugin, {
//     model: 'user',
//     field: 'id',
//     startAt: 1,
//     incrementBy: 1,
//   });
module.exports = mongoose.model('user', adminSchema);
