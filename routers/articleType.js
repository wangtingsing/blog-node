const articleTypeSchema = require('../models/articleType');
const arrayToString = require('../db/untils/untils');
// 查询
exports.getArticleType = (req, res)=>{
    articleTypeSchema.find({},{ name: 1, type: 1, _id: 0}).then(data=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data)

      
    })
}
// 更新type
exports.updateArticleType = (req, reponse)=>{
    articleTypeSchema.insertMany([{"name":"影视","type":1},{"name":"数码","type":2},{"name":"校园","type":3},{"name":"体育","type":4}]).then(res=>{
        console.log('新增类型成功');
        reponse.send("hajklahah");
    })
}