const fs = require('fs');
const path = require('path');

const productService = require('../data/productService')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const multer = require('../middlewares/multerMiddle');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('index', {products: productService.getAll})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('../views/detail.ejs')
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
		store: (req, res) => {
			fs.appendFileSync(productsFilePath, JSON.stringify(req.body));
			res.redirect('/products/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.redirect('/products')
	}
};

module.exports = controller;