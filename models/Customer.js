const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    totalSpending: Number,
    visits: Number,
    lastVisit: Date,
});

module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
