const express = require('express');
const OrderControllers = require('../controllers/order');
const AuthMiddleWare = require('../middlewares/auth');
const orderRouter = express.Router();

// // create order
// orderRouter.post('/',AuthMiddleWare.auth,AuthMiddleWare.adminAuth,OrderControllers.createOrder);

// // admin get all order
// orderRouter.get('/all',AuthMiddleWare.auth,AuthMiddleWare.adminAuth,OrderControllers.getAllOrder);

// // user login order
// orderRouter.get('/',AuthMiddleWare.auth,OrderControllers.loginOrder);

// // get order by id
// orderRouter.get('/:id',AuthMiddleWare.auth,OrderControllers.getOrderById);

// // paid order
// orderRouter.put('/:id/pay',AuthMiddleWare.auth,OrderControllers.paidOrder);

// // delivered orders
// orderRouter.put('/:id/delivered',AuthMiddleWare.auth,OrderControllers.deliveredOreder);

// create order
orderRouter.post('/',OrderControllers.createOrder);

// admin get all order
orderRouter.get('/all',OrderControllers.getAllOrder);

// user login order
orderRouter.get('/',OrderControllers.loginOrder);

// get order by id
orderRouter.get('/:id',OrderControllers.getOrderById);

// paid order
orderRouter.put('/:id/pay',OrderControllers.paidOrder);

// delivered orders
orderRouter.put('/:id/delivered',OrderControllers.deliveredOreder);

module.exports = orderRouter;