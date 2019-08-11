var mysql = require('mysql');

 const getDb = ()=>{

  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'blogdemo2db'
  });

  connection.connect();
  return connection;

}

 const closeDb = (connection)=>{
  connection.end();
}

module.exports = {
  getDb,
  closeDb
}
