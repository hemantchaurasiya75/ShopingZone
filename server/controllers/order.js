const Order = require("../models/Order");

class OrderControllers {
    // create order
    async createOrder(req, res) {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;
        try {
            if (orderItems && orderItems.length === 0) {
                res.status(400).json("No order items");
                return;
            } else {
                const order = new Order({
                    orderItems,
                    user: req.user._id,
                    shippingAddress,
                    paymentMethod,
                    itemsPrice,
                    taxPrice,
                    shippingPrice,
                    totalPrice,
                });
                const createOrder = await order.save();
                res.status(201).json(createOrder);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // admin get all order
    async getAllOrder(req, res) {
        try {
            const orders = await Order.find({}).sort({ _id: -1 }).populate("user", "id name email");
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // user login order
    async loginOrder(req, res) {
        try {
            const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // get order by id
    async getOrderById(req, res) {
        try {
            const order = await Order.findById(req.params.id).populate("user", "name email");
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json("Order Not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // order is paid
    async paidOrder(req, res) {
        const order = await Order.findById(req.params.id);

        try {
            if (order) {
                order.isPaid = true;
                order.paidAt = Date.now();
                order.paymentResult = {
                    id: req.body.id,
                    status: req.body.status,
                    update_time: req.body.update_time,
                    email_address: req.body.email_address,
                };

                const updatedOrder = await order.save();
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json("Order Not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // delivered order
    async deliveredOreder(req, res) {
        try {
            const order = await Order.findById(req.params.id);

            if (order) {
                order.isDelivered = true;
                order.deliveredAt = Date.now();

                const updatedOrder = await order.save();
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json("Order Not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new OrderControllers();