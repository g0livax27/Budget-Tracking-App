// Model Code \\
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
    billAmount: String,
    billName: String,
    billPaid: Boolean
    }
);

const Bills = mongoose.model('Bills', billSchema);

module.exports = Bills;