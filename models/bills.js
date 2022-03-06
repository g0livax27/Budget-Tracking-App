// Model Code \\
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    amount: String,
    billName: String,
    billPaid: Boolean
});

const Bill = mongoose.model('Bill', billSchema);



module.exports = Bill;