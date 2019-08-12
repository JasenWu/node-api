let modulesId = 'login';
 //uuid
const uuidv1 = require('uuid/v1');



 //get-user 获取用户
 APP.post('/login-user', function (req, res) {
 
  let {username,password} = req.fields;
 
  let sql = `select * from user where username = '${username}'  and password_hash = '${password}'`;
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    if(results.length>0){
      let result = `登录成功 ${results[0].username}`
      res.send(result);
    }else{
      let result = `用户名或密码错误： ${username} .  ${password}`
      res.send(result);
    }
  });
 
})


// add-user  增加用户
APP.get('/logout-user', function (req, res) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 'uuid: '+ uuidv1() + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
}) 

module.exports = {
  modulesId
}