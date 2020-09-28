const user = require('../models/user');


exports.login = (req, reponse)=>{
    user.create({"name":"wangqing"}).then(res=>{
        console.log('新增成功');
        reponse.send("hahhahah");
    })
}