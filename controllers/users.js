// Dependencies \\
const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

// Create Route \\
const router = express.Router();

// Routes \\
// Signup Routes
router.get('/signup', (req, res) => {
    res.render('user/Signup.jsx')
});

router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    User.create(req.body)
        .then((user) => {
            res.redirect('/user/login');
        })
        .catch((err) => {
            console.log(err)
            res.json({ err });
        })
});

// Login Routes
router.get('/login', async (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then(async (user) => {
            if(user){
                const result = await bcrypt.compare(password, user.password);
                if(result){
                    res.redirect('/bills');
                } else {
                    res.json({ error: "Password Does Not Match"});
                }
            } else {
                res.json({ error: "User Does Not Exist"});
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({ err });
        })
});

router.post('/login', (req, res) => {
    res.send('login')
});

module.exports = router;