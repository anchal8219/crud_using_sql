
var mysql = require('mysql');  
var db = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "asdf9876",   
database: "college"  
});  


// Creating database and table

// db.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     let createStud = `create table if not exists students(
//                             id int primary key auto_increment,
//                             username varchar(255)not null,
//                             password varchar(255)not null
//                         )`;
  
//     db.query(createStud, function(err, results, fields) {
//       if (err) {
//         console.log(err.message);
//       }
//     });
  
//     db.end(function(err) {
//       if (err) {
//         return console.log(err.message);
//       }
//     });
//   });
 

module.exports = db;