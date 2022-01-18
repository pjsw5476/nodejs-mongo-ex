const express = require("express");
const passport = require('passport');
const userValidation = require("../controllers/user/user.validator");
//FIXME TEST_PASSPORT
const { addUser, getUsers, login, logout, login1, authenticate } = require("../controllers/user/user.controller");

const defaultController = require("../controllers/defaultController");


// const auth = require("../utils/auth")

const router = express.Router();

router.get("/", defaultController); 

router.post("/addUser", userValidation, addUser); //swagger

router.post("/login", userValidation, login); //swagger

//FIXME TEST_PASSPORT
router.post("/login1", login1); 
router.get('/me', passport.authenticate('jwt', { session: false }), authenticate);



router.post("/logout", userValidation, logout);

router.get("/getUsers", getUsers); //swagger


module.exports = router;
