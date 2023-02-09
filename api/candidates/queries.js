const con = require("../../config/db_connection")

module.exports = {
    create : (data,callback)=>{
            // console.log("DAQTAQQQQQQQQQ")
            // console.log(data)
            con.query("insert into candidates(first_name, last_name, email, contact_number, gender, specialisation, total_experience, birth_date, address, resume) values(?,?,?,?,?,?,?,?,?,?)",
            [
                data.first_name,
                data.last_name,
                data.email,
                data.contact_number,
                data.gender,
                data.specialisation,
                data.total_experience,
                data.birth_date,
                data.address,
                data.resume,
            ],
            (error,results,fields)=>{
                if(error){
                    console.log("EROORRRRRRRRRR")
                    return callback(error)
                } else{
                    console.log("Data Inserteddddddd")
                    return callback(null,results)
                }
            }
        );
    },
    getUserByUserId: (id, callBack) => {
            con.query(
            "select id,first_name, last_name, email, contact_number, gender, specialisation, total_experience, birth_date, address, resume from candidates where id = ?",
            [id],
            (error, results, fields) => {
                if (error) {
                callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
            con.query(
            "select id,first_name, last_name, email, contact_number, gender, specialisation, total_experience, birth_date, address, resume from candidates",
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}