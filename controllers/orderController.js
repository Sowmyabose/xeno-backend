const Order = require('../models/Order');

const createOrder = async (req, res) => {
    try {
        const { customerId, items, total } = req.body;
        const newOrder = await Order.create({ customerId, items, total });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder };
