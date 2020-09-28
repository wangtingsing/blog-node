const { mongoose } = require('../db/mongodb.js');

// 提供哈希算法模块
const crypto = require('crypto');
// id自增
// const autoIncrement = require('mongoose-auto-increment');
const articleTypeSchema = new mongoose.Schema({
  // 名字
  name: { type: String, required: true, default: '' },

  //1影视 2数码 3校园 4体育
  type: { type: Number, required: true, default: 1 },


  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now},
  
  
});

module.exports = mongoose.model('articleType', articleTypeSchema);
