// Import Dependencies \\
require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const PORT = 3000;
const Bills = require('./models/bills');

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
app.set('view engine', 'jsx');

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
    Bills.find({}, (err, foundBills) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('bills/Index', {
                bills: foundBills
            })
        }
    })
});

// New Route \\
app.get('/bills/new', (req, res) => {
    res.render('bills/New')
});

// Delete Route \\


// Update Route \\


// Create Route \\


// Edit Route \\


// Show Route \\
app.get('/bills/:id', (req, res) => {
    Bills.findById(req.params.id, (err, foundBill) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Show', {
                bill: foundBill
            })
        }
    })
});

app.listen(PORT, () => {
    console.log('eavesdropping on 3000')
});