const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
	name: joi.string().alphanum().min(3).max(25).trim(true).required(),
	price: joi.number().required(),
	brand: joi.string().max(11).trim(true).optional(),

	
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

const productValidation = async (req, res, next) => {
	const payload = {
		name: req.body.name,
		price: req.body.price,
		brand: req.body.brand,
		//status 판매중
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
// ====================================================================
// ====================================================================
// ====================================================================
const validation_query = joi.object({
	skip: joi.number(),
	limit: joi.number(),
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>VALIDATION CHECK<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

const productValidation_query = async (req, res, next) => {
	const query = {
		skip: req.query.skip,
		limit: req.query.limit,
		//status 판매중
	};

	const { error } = validation_query.validate(query);
	console.log('+++++++error+++++++')
    console.log(error)
    console.log('+++++++error+++++++')
	if (error) {		
		res.status(406);
		return res.json(
			errorFunction(true, `Error in Product_quety Data : ${error.message}`)
		);
	} else {
		next();
	}
};

// ====================================================================
// ====================================================================
// ====================================================================
const validation_params = joi.object({
	id: joi.string().required()
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>VALIDATION CHECK<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

const productValidation_params = async (req, res, next) => {
	const params = {
		id: req.params.id,
	};

	const { error } = validation_params.validate(params);
	console.log('+++++++error+++++++')
    console.log(error)
    console.log('+++++++error+++++++')
	if (error) {		
		res.status(406);
		return res.json(
			errorFunction(true, `Error in Product_quety Data : ${error.message}`)
		);
	} else {
		next();
	}
};
// ====================================================================
// ====================================================================
// ====================================================================
const validation_update_params = joi.object({
	id: joi.string().required()
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>VALIDATION CHECK<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

const productValidation_update_params = async (req, res, next) => {
	const params = {
		id: req.params.id,
	};

	const { error } = validation_update_params.validate(params);
	console.log('+++++++error+++++++')
    console.log(error)
    console.log('+++++++error+++++++')
	if (error) {		
		res.status(406);
		return res.json(
			errorFunction(true, `Error in Product_quety Data : ${error.message}`)
		);
	} else {
		next();
	}
};

// ====================================================================
// ====================================================================
// ====================================================================
const validation_del_params = joi.object({
	id: joi.string().required()
});
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>VALIDATION CHECK<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

const productValidation_del_params = async (req, res, next) => {
	const params = {
		id: req.params.id,
	};

	const { error } = validation_del_params.validate(params);
	console.log('+++++++error+++++++')
    console.log(error)
    console.log('+++++++error+++++++')
	if (error) {		
		res.status(406);
		return res.json(
			errorFunction(true, `Error in Product_quety Data : ${error.message}`)
		);
	} else {
		next();
	}
};
module.exports ={productValidation, productValidation_query, productValidation_params, productValidation_update_params, productValidation_del_params} ;
