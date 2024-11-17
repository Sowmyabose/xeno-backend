const express = require('express');
const Order = require('../models/Order');
const Customer = require('../models/Customer');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { customerId, amount, date } = req.body;

        // Validate customer existence
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Create and save order
        const order = new Order({ customerId, amount, date });
        await order.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
});

module.exports = router;
