const express = require('express');
const ProductControllers = require('../controllers/product');
const AuthMiddleWare = require('../middlewares/auth');
const productRouter = express.Router();

// // create new product
// productRouter.post('/',AuthMiddleWare.adminAuth,ProductControllers.createProduct);

// // get all product
// productRouter.get('/',ProductControllers.getAllProducts);

// // admin get all product without search and pagination
// productRouter.get('/all',AuthMiddleWare.auth,AuthMiddleWare.adminAuth,ProductControllers.getAllProductsbyAdmin);

// // get single product
// productRouter.get('/:id',ProductControllers.getProduct);

// // product review
// productRouter.post('/:id/review',AuthMiddleWare.auth,ProductControllers.productReview);

// // delete product
// productRouter.delete('/:id',AuthMiddleWare.auth,AuthMiddleWare.adminAuth,ProductControllers.deleteProduct);

// // update product
// productRouter.put('/:id',AuthMiddleWare.auth,AuthMiddleWare.adminAuth,ProductControllers.updateProduct);


// create new product
productRouter.post('/',ProductControllers.createProduct);

// get all product
productRouter.get('/',ProductControllers.getAllProducts);

// admin get all product without search and pagination
productRouter.get('/all',ProductControllers.getAllProductsbyAdmin);

// get single product
productRouter.get('/:id',ProductControllers.getProduct);

// product review
productRouter.post('/:id/review',ProductControllers.productReview);

// delete product
productRouter.delete('/:id',ProductControllers.deleteProduct);

// update product
productRouter.put('/:id',ProductControllers.updateProduct);

module.exports = productRouter;