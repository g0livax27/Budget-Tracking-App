// Import Dependencies \\
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));