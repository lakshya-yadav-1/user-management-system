const express = require("express");
const router = express.Router(); 
const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/userAuthentication");
const validate = require("../middleware/validation");
const {
  registerSchema,
  loginSchema,
} = require("../validation/auth.validation");

router.post("/register", validate(registerSchema), registerAdmin);

router.post("/login", validate(loginSchema), loginAdmin);

module.exports = router;
