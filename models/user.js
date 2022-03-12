// Model Code \\
const mongoose = require('./connection');

const { userSchema, model} = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const User = model('User', userSchema);

module.exports = User;