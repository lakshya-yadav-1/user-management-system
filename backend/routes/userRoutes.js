const express = require("express");
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require("../controllers/userController");
const validate = require("../middleware/validation");
const authenticateToken = require("../middleware/auth");
const { userSchema } = require("../validation/authValidation");


router.use(authenticateToken);


router.get("/", getUsers);


router.post("/", validate(userSchema), addUser);


router.put("/:id", validate(userSchema), updateUser);


router.delete("/:id", deleteUser);

module.exports = router;