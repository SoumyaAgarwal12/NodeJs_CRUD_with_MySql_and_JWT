const { create,getUserByUserId,getUsers } = require("./queries.js")
const jwt = require("jsonwebtoken")
const secretkey = "__1secretkey1__";

module.exports = {
    createUser : (req, res) => {
        const body = req.body
        // console.log(req)
        // console.log("HEREEEE")
        // console.log(body)
        create(body, (err, results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            } else{
                return res.status(200).json({
                    success:1,
                    message:results
                })
            }
        })
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
    },
    getUsers: (req, res) => {
    getUsers((err, results) => {
        if (err) {
        console.log(err);
        return;
        }
        return res.json({
        success: 1,
        data: results
        });
    });
    },
    generateToken : (req, res) => {
      const body = req.body
      jwt.sign({ body },secretkey,{ expiresIn:'300s' },(err,token)=>{
        // req.token = token
        return res.json({
          token
        })
      })
  },
}