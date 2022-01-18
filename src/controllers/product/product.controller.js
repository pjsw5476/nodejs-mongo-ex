const Product = require("../../models/product");
const errorFunction = require("../../utils/errorFunction");
const mongoose = require('mongoose');
//====================================================================================
//====================================================================================

const addProduct = async (req, res, next) => {
	try {
		const newProduct = await Product.create({
			name: req.body.name,
			price: req.body.price,
			brand: req.body.brand,
		});
		res.json({
			newProduct,
		})
	} catch (error) {
		res.status(400);
		console.log(error);
		return res.json(errorFunction(true, "Error Adding user"));
	}
}
//====================================================================================
//====================================================================================

const getProducts = async (req, res, next) => {

	const skip =req.query.skip
	const limit = req.query.limit

	try {
		const allProducts = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
		if (allProducts) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all Products", allProducts),
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting Products"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting Product"));
	}
	
};
//====================================================================================
//====================================================================================

const getProducts_cnt = async (req, res, next) => {
	try {
		const allProducts = await Product.count();
		if (allProducts) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all Products count", allProducts)
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting Products count"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting Product count"));
	}
};
//====================================================================================
//====================================================================================

const getProductById = async (req, res, next) => {

	try {
		const oneProduct = await Product.findById(req.params.id);
		if (oneProduct) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending all Products", oneProduct),
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error getting oneProduct"));
		}
	} catch (error) {
		res.status(400);
		return res.json(errorFunction(true, "Error getting one_Product"));
	}
	
};

//====================================================================================
//====================================================================================

const updateProduct = async (req, res, next) => {
	try {
		console.log('req.body111')
		console.log(req.body)
		const id = req.params.id;
		const updateInfo = req.body

		const Product_update = await Product.findOneAndUpdate(
			{ _id:id }, 
			{ $set: updateInfo },
			{ new:true }
			);
		if (Product_update) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending update Product_update", Product_update),
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error update oneProduct"));
		}
	}catch{
		res.status(400);
		return res.json(errorFunction(true, "Error updating one_Product"));
	}

}

//====================================================================================
//====================================================================================

const deleteProductById = async (req, res, next) => {
	try {

		const oneProduct_del = await Product.findByIdAndDelete(req.params.id);
		if (oneProduct_del) {
			res.status(201);
			return res.json(
				errorFunction(false, "Sending delete Product_del", oneProduct_del),
			);
		} else {
			res.status(403);
			return res.json(errorFunction(true, "Error delete oneProduct"));
		}
	}catch{
		res.status(400);
		return res.json(errorFunction(true, "Error deleting one_Product"));
	}

}



module.exports = { addProduct,  getProducts, getProducts_cnt, getProductById, updateProduct ,deleteProductById};


