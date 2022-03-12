// Dependencies \\
const express = require('express');
const User = require('./models/user');
const bcrypt = require('bcryptjs');

// Create Route \\
const router = express.Router();

// Routes \\
// Signup Routes
router.get('/signup', (req, res) => {
    res.render('user/Signup.jsx')
});

router.post('/signup', (req, res) => {
    res.send('signup')
});

// Login Routes
router.get('/login', (req, res) => {
    res.render('user/Login.jsx')
});

router.post('/login', (req, res) => {
    res.send('login')
});

module.exports = router;