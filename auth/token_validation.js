const jwt = require("jsonwebtoken")
const secretkey = "__1secretkey1__";

module.exports = {
    checkToken : (req,res,next)=>{
        const bearerHeader = req.headers['authorization']
        // console.log(bearerHeader)
        if(bearerHeader != undefined){
            const bearerToekn = bearerHeader.split(" ")[1]
            // console.log("HEREEEEE")
            // console.log(bearerToekn)
            
            // console.log("Now")
            // console.log(req.token)
            // -----------Verify Token------------------
            jwt.verify(bearerToekn,secretkey,(err,authData)=>{
                if(err){
                  res.send({
                    message:"Invalid Token"
                  })
                } else{
                    // console.log(authData)
                    // req.authData = authData
                    next() // For going on called api
                }
              })
        } else{
            res.send({
            message:"Access Denied....Unauthorized User"
            })
        }
    }
}

