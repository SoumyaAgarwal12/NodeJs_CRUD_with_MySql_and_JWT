const { createUser,getUserByUserId,getUsers,generateToken } = require("./controller")
const router = require("express").Router()

// For Token Validation
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken,createUser)
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);

router.post("/generateToken",generateToken);


module.exports = router