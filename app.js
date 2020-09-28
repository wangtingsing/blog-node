var express = require('express');
var swig = require('swig');
const mongodb = require('./db/mongodb');
const router = require('./routers/index');
var app = express();

app.use(router);
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

//配置模板引擎
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
// 开发过程中 取消缓存模板解析
swig.setDefaults({cache:false});

// app.get('/',function(req,res,next){
//      res.render('index')
// })



app.listen(3000,function(){
    console.log("启动3000端口")
});