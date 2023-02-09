const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'recruit_crm'
});

// For checking connection(optional)
con.connect((err)=>{
    if(err){
        console.warn(err)
        console.warn("Error in connection")
    } else{
        console.log("Connected")
    }
})

module.exports = con;