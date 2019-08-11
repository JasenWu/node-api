let modulesId = 'user';
 
 //get-user 获取用户
 APP.get('/list-user', function (req, res) {
  connection.query('select * from user', function (error, results, fields) {
    if (error) throw error;
     
    res.send(results);
  });
 
})


// add-user  增加用户
APP.post('/add-user', function (req, res) {

  let sql = "INSERT INTO `user`(`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`) VALUES (3,'jason','12345uio','drtyu','tyuiop1111@qq.com','tyuiop11111','jj4567sfd@qq.com','','')";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send(results);
  });
})

//  /del_user 删除用户
APP.get('/del-user', function (req, res) {
  let id = req.query.id;
  let sql = 'delete from user where id = ' + id;
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send('delete success'+id);
  });
 
})

// update-user  修改用户
APP.post('/update-user', function (req, res) {
  let sql = "UPDATE `user` SET  `username`='45678tyui' WHERE id = 2;";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
     res.send(results);
  });
})

module.exports= {
  modulesId
}