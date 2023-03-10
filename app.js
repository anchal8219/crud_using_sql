const express = require('express')
const db = require('./conn.js')
var app=express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/form.html");
})

app.post('/',(req,res)=>{

    var username= req.body.name;
    var password= req.body.number;

    db.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO students(username , password) VALUES ?";

        var values = [
            [username, password]
        ];

        db.query(sql, [values], function(error,result){
            if(error) throw error;
            res.send("suc" + result.insertId)
            // res.redirect('/user')
        })
    })
})

app.get('/user',(req,res)=>{
    // db.connect(function(error){
    //     if(error) throw error;

        var sql = "select * from students";
        db.query(sql,function(error,result){
            if(error) console.log(error);
            res.render(__dirname + '/user',{emp: result});
        })
    // })
})

app.get('/delete-data',(req,res)=>{
    // db.connect(function(error){
    //     if(error) throw error;

        var sql = "DELETE FROM students WHERE id= ?";

        var id = req.query.id;
        console.log(id)

        db.query(sql,[id] ,function(error,result){
            if(error) console.log(error);
            res.redirect('/user');
        })
    // })
})

app.listen(3000,()=>{
    console.log("server listening on port" + 3000);

});

