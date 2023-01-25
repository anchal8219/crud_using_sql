
var mysql = require('mysql');  
var db = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "asdf9876",   
database: "mysqldb"  
});  


module.exports = db;