let modulesId = 'login';
 
 //get-user 获取用户
 APP.post('/login-user', function (req, res) {

  // console.log('req',typeof(req.fields));
  // console.log('reqfiles',req.files);



  let {username,password} = req.fields;

 
   
  let sql = `select * from user where username = '${username}'  and password_hash = '${password}'`;
  
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    if(results.length>0){
 

      let result = `登录成功 ${results[0].username}. ${cookieSession.isNew} `
      res.send(result);
    }else{
      let result = `用户名或密码错误： ${username} .  ${password}`
      res.send(result);
    }
  });
 
})


// add-user  增加用户
APP.get('/logout-user', function (req, res) {
  // var n = req.session.views || 0
  // req.session.views = n++
  res.send(req.session.views + ' views12345')
}) 

module.exports= {
  modulesId
}