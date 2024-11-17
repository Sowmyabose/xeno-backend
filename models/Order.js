const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    amount: Number,
    date: Date,
});

// Use mongoose.model only if the model is not already defined
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);

