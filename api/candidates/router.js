const { createUser,getUserByUserId,getUsers, } = require("./controller")
const router = require("express").Router()

router.post("/",createUser)
router.get("/", getUsers);
router.get("/:id", getUserByUserId);

module.exports = router