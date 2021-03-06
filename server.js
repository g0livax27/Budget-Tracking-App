// Import Dependencies \\
require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const UserRouter = require('./controllers/users');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Database Connection \\
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish Connection \\
mongoose.connect(DATABASE_URL, CONFIG);

// Controllers \\
const bills = require('./controllers/bills.js');
const wishlist = require('./controllers/wishlists.js')

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

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false
    })
);

// Routes \\
app.use('/bills', bills);
app.use('/wishlist', wishlist);
app.use('/user', UserRouter);
app.get('/', (req, res) => {
    res.render('Index')
});
app.get('/expenses', (req, res) => {
    res.render('Show')
});

// Server Listener \\
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`eavesdropping on Port ${PORT}`)
});