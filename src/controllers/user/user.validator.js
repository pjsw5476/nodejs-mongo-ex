const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
	userName: joi.string().alphanum().min(3).max(25).trim(true).required(),
	email: joi.string().min(9).max(15).trim(true).optional(),
	// email: joi.string().email().trim(true).required(),
	// email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
	password: joi.string().min(8).trim(true).required(),
	mobileNumber: joi.string().max(11).trim(true).optional(),

	// birthYear: joi.number().integer().min(1920).max(2000),
	// skillSet: joi
	// 	.array()
	// 	.items(joi.string().alphanum().trim(true))
	// 	.default([]),
	// is_active: joi.boolean().default(true),
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>VALIDATION CHECK<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

const userValidation = async (req, res, next) => {
	const payload = {
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
		mobileNumber: req.body.mobileNumber,
		// birthYear: req.body.birthYear,
		// skillSet: req.body.skillSet,
		// is_active: req.body.is_active,
	};

	const { error } = validation.validate(payload);
	console.log('+++++++error+++++++')
    console.log(error)
    console.log('+++++++error+++++++')
	if (error) {		
		res.status(406);
		return res.json(
			errorFunction(true, `Error in User Data : ${error.message}`)
		);
	} else {
		next();
	}
};






module.exports = userValidation;
