var express = require('express');
var app = express();
let { getDb, closeDb } =  require('./db');
 
const  connection = getDb();//数据库连接池

 //get-user 获取用户
app.get('/list-user', function (req, res) {
  connection.query('select * from user', function (error, results, fields) {
    if (error) throw error;
     
    res.send(results);
  });
 
})


// add-user  增加用户
app.post('/add-user', function (req, res) {
  let sql = "INSERT INTO `user`(`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`) VALUES (2,'jason','12345uio','drtyu','tyuiop','tyuiop','jjsfd@qq.com','','')";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send(results);
  });
})

//  /del_user 删除用户
app.get('/del-user', function (req, res) {
  let id = req.query.id;
  let sql = 'delete from user where id = ' + id;
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send('delete success'+id);
  });
 
})

// update-user  修改用户
app.post('/update-user', function (req, res) {
  let sql = "UPDATE `user` SET  `username`='45678tyui' WHERE id = 2;";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send(results);
  });
})

 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})