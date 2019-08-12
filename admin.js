var express = require('express');
let GLOBAL = global;//全局变量
let Modules = [];//所有模块名称集合
GLOBAL.APP = express();//express

const formidableMiddleware = require('express-formidable');//接收表单数据中间件 req.files | 文件 req.fileds | 字段
APP.use(formidableMiddleware());

//数据库连接
let { getDb, closeDb } =  require('./db');
GLOBAL.connection = getDb();//数据库连接池


//设置跨域名
APP.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/  
  else  next();  
});

//设置session
var session = require('express-session');
var sess = {
  secret: 'keyboard cat',
  cookie: {
   // maxAge:1000 * 3
  }
}

if (APP.get('env') === 'production') {
  APP.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}


APP.use(session(sess));



Modules.push(require('./modules/login').modulesId);//用户模块
Modules.push(require('./modules/user').modulesId);//登录模块

//启动服务
var server = APP.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

//打印所有模块
console.log('modulesId',Modules);
 

 




 
 

