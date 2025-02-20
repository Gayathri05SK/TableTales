const express = require('express');
const Order = require('../models/order'); // Corrected import

const router = express.Router();

// Place Order
router.post('/', async (req, res) => {
    try {
        const { Fullname, phonenumber, deliveryaddress, paymentMethod, items, totalPrice } = req.body;
        const newOrder = new Order({ Fullname, phonenumber, deliveryaddress, paymentMethod, items, totalPrice });
        await newOrder.save();
        res.json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
});

// Get Orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

module.exports = router;