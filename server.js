// Import Dependencies \\
require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const PORT = 3000;

// Database Connection \\
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish Connection \\
mongoose.connect(DATABASE_URL, CONFIG);

// Express App Object \\
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('vew engine', 'jsx');

// Middleware \\
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    next()
});
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Index Route \\
app.get('/bills', (req, res) => {
    res.render('bills/Index')
});

// New Route \\


// Delete Route \\


// Update Route \\


// Create Route \\


// Edit Route \\


// Show Route \\


app.listen(PORT, () => {
    console.log('eavesdropping on 3000')
});