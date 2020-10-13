const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MiddleWears
app.use(cors())
app.use(bodyParser.json());

// Import Routes
const postsRoutes = require('./routes/posts');

app.use('/api', postsRoutes);

// Routes 
app.get('/', (req, res) => {
    res.send("We are on home");
})

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
    console.log('connected de DB');
})

//How do we start listening to the server
app.listen(3000);