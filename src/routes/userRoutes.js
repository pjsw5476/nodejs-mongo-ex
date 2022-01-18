const express = require("express");
const passport = require('passport');
const userValidation = require("../controllers/user/user.validator");
const { addUser, getUsers, login, logout  } = require("../controllers/user/user.controller");
const defaultController = require("../controllers/defaultController");

// const auth = require("../utils/auth")

const router = express.Router();


router.get("/", defaultController); 

router.post("/addUser", userValidation, addUser); //swagger

router.post("/login", userValidation, login); //swagger

router.post("/logout", userValidation, logout);

router.get("/getUsers", getUsers); //swagger
// FIXME PASSPORTTEST
// router.post("/login_test", auth ,login_test);


// router.get()

module.exports = router;
