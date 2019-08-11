let modulesId = 'login';
 
 //get-user 获取用户
 APP.post('/login-user', function (req, res) {

  // console.log('req',typeof(req.fields));
  // console.log('reqfiles',req.files);


  var cookieSession = require('cookie-session')
  let {username,password} = req.fields;

 
   
  let sql = `select * from user where username = '${username}'  and password_hash = '${password}'`;
  
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    if(results.length>0){

      APP.set('trust proxy', 1) // trust first proxy
      console.log('results',results[0].username);
      APP.use(cookieSession({
        name: results[0].username,
        keys: results[0].password_hash
      }))

      let result = `登录成功 ${results[0].username}`
      res.send(result);
    }else{
      let result = `用户名或密码错误： ${username} .  ${password}`
      res.send(result);
    }
  });
 
})


// add-user  增加用户
APP.post('/logout-user', function (req, res) {

  let sql = "INSERT INTO `user`(`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`) VALUES (3,'jason','12345uio','drtyu','tyuiop1111@qq.com','tyuiop11111','jj4567sfd@qq.com','','')";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send(results);
  });
}) 

module.exports= {
  modulesId
}