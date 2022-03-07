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
    Bills.find({})
        .then((bills) => {
            res.render('bills/Index', { bills });
        })
        .catch((err) => {
            res.status(400).json({ err })
        })
});

// New Route \\
app.get('/bills/new', (req, res) => {
    res.render('bills/New')
});

// Delete Route \\


// Update Route \\


// Create Route \\
app.post('/bills/', (req, res) => {
    req.body.billPaid = req.body.billPaid === 'on' ? true : false;
    Bills.create(req.body)
        .then((createdBill) => {
            res.redirect(`/bills/${createdBill._id}`);
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
});

// Edit Route \\
app.get('/bills/:id/edit', (req, res) => {
    const { id } = req.params;
    Bills.findById(id)
        .then((bills) => {
            res.render('bills/Edit', { bills });
        })
        .catch((err) => {
            res.status(400.).json({ err });
        })
});

// Show Route \\
app.get('/bills/:id', (req, res) => {
    const { id } = req.params;
    Bills.findById(id)
        .then((bill) => {
            res.render('bills/Show', { bill });
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
});

app.listen(PORT, () => {
    console.log('eavesdropping on 3000')
});