// ************ Require's ************
const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddle');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/', uploadFile.single('image'), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
// router.???('/:id/???', productsController.edit); 
// router.???('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.get('/:id', productsController.destroy); 


module.exports = router;
