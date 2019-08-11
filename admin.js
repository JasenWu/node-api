var express = require('express');

 
const formidableMiddleware = require('express-formidable');




let GLOBAL = global;
 
GLOBAL.APP = express()
APP.use(formidableMiddleware());
var cookieSession = require('cookie-session')
APP.set('trust proxy', 1) // trust first proxy

APP.use(cookieSession({
  name: 'session',
  keys: ['key1']
}))



APP.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/  
  else  next();  
});

let { getDb, closeDb } =  require('./db');
let Modules = [];
GLOBAL.connection = getDb();//数据库连接池

Modules.push(require('./modules/login').modulesId);//用户模块
Modules.push(require('./modules/user').modulesId);//登录模块


var server = APP.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})


console.log('modulesId',Modules);
 

 




 
 

