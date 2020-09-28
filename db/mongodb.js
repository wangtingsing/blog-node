var mongoose = require('mongoose');
// 配置连接
var options = {
    db_user: "",
    db_pwd:"",
    db_host:"127.0.0.1",
    db_port: "27017",
    db_name: "blog3",
    useNewUrlParser: true
    
};

var dbURL = "mongodb://" + options.db_user + options.db_host + ":" + options.db_port + "/" + options.db_name
console.log(dbURL);
mongoose.connect(dbURL)
mongoose.connection.on('open', (err) => {
    if(!err){
        console.log('数据库连接成功!')
    }else{
        console.log(err)
    } 
})
exports.mongoose = mongoose;


