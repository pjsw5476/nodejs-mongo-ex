const User = require("../../models/user");
const errorFunction = require("../../utils/errorFunction");
const { hash, compare } = require("bcryptjs");
const mongoose = require('mongoose')

//JWT
const jsonwebtoken = require('jsonwebtoken');
// const { authenticate } = require("passport");
const SECRET_KEY = 'e7f2edf99bc8d5cfafe5c9197f9c6fe107ae9d00fcbc2584b80d8d9a5e716f7fc68210e87c5091659ba73f6a40e95e93eee42d4ddb6184d5d80c7f93e3c8c10c'
// const securePassword = require("./../../utils/securePassword");
// const jwt_auth = require('../../utils/auth');
// const YOUR_SECRET_KEY = process.env.SECRET_KEY; //FIXME
// const passport = require('passport');
require('dotenv').config();

//====================================================================================
//====================================================================================
//====================================================================================
//====================================================================================
const addUser = async (req, res, next) => {
	try {
		const existingUser = await User.findOne({
			email: req.body.email,
		}).lean(true);
		if (existingUser) {
			res.status(403);
			return res.json(errorFunction(true, "User Already Exists"));
		} else {
			// const hashedPassword = await securePassword(req.body.password);
			const hashedPassword = await hash(req.body.password, 10);
			const newUser = await User.create({
				userName: req.body.userName,
				email: req.body.email,
				password: hashedPassword,
				mobileNumber: req.body.mobileNumber,
				sessions: [{ createdAt: new Date() }],
			});
			const session = newUser.sessions[0];
			console.log('>>>session<<<')
			console.log(session)
			console.log('>>>session<<<')
			console.log(req)
			res.json({
				newUser,
				sessionId: session._id,

			})
			// if (newUser) {
			// 	res.status(201);
			// 	return res.json(
			// 		errorFunction(false, "User Created", newUser)
			// 	);
			// } else {
			// 	res.status(403);
			// 	return res.json(errorFunction(true, "Error Creating User"));
			// }
		}
	} catch (error) {
		res.status(400);
		console.log(error);
		return res.json(errorFunction(true, "Error Adding user"));
	}
};
//====================================================================================
//====================================================================================
//====================================================================================
//====================================================================================
const login = async (req, res, next) => {
	try {
		// const user = await User.findOne({ userName: req.body.userName });
		const user = await User.findOne({ userName: req.body.userName });
		if (!user) throw new Error("가입되지 않은 유저입니다.");
		const isValid = await compare(req.body.password, user.password);
		if (!isValid) throw new Error("입력하신 정보가 올바르지 않습니다.");

		user.sessions.push({createdAt: new Date() })
		const session = user.sessions[user.sessions.length-1];
		
		await user.save();
		res.json({
			sessionId: session._id,
			userName: user.userName,
			email: user.email,
		}).status(200)
		console.log('req')
		console.log(req.session[0])
		console.log('req==============================')
		console.log(req)
	} catch (error) {
		console.log('error>>>>>>>>>>login')
		res.status(400);
	}
};


//FIXME TEST_PASSPORT
const login1 = async (req, res, next) => {
	try {
		// const user = await User.findOne({ userName: req.body.userName });
		const user = await User.findOne({ userName: req.body.userName });
		if (!user) throw new Error("가입되지 않은 유저입니다.");
		const isValid = await compare(req.body.password, user.password);
		if (!isValid) throw new Error("입력하신 정보가 올바르지 않습니다.");
		console.log('123')
		// console.log(user)
		
		const payload = {
			userName : user.userName,
			password : user.password,
		}
		
		const token = jsonwebtoken.sign(payload, SECRET_KEY, {expiresIn: '1h'}) 

		res.json({
			userName: user.userName,
			email: user.email,
			token: token
		}).status(200)
	} catch (error) {
		console.log('error>>>>>>>>>>login1')
		res.status(400);
	}
};

const authenticate = async (req, res, next) => {	
	return res.json(req.user);
};



//====================================================================================
//====================================================================================
//====================================================================================
//====================================================================================
const logout = async (req, res, next) => {	
	try {
		// console.log(req.headers)
		const { sessionid } = req.headers
		
		//세션 검증해주는 부분 몽구스모듈에 있음
		if(!mongoose.isValidObjectId(sessionid)){throw new Error('invalid sessionid')}
		const user = await User.findOne({"sessions._id": sessionid});
		console.log('user>>>>>>>>>>>>>>>>>user')
		console.log(user)
		console.log('user>>>>>>>>>>>>>>>>>user')

		await User.updateOne(
			{ _id: user.id },
			{ $pull: { sessions: { _id: sessionid } } }
		  );
		res.json({"message":"success"})
	} catch (error) {
		console.log('error>>>>>>>>>>logout')
		res.status(400);
	}
}
//====================================================================================
//====================================================================================
//====================================================================================
//====================================================================================
const getUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		if (allUsers) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all users", allUsers)
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting Users"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting user"));
	}
};
//====================================================================================
//====================================================================================
//====================================================================================
//====================================================================================


//FIXME TEST_PASSPORT
module.exports = { addUser, login, logout ,getUsers, login1, authenticate };


