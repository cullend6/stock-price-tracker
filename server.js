const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(() => console.log('Error'));

//use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));

async function getData(){
    const res = await axios.get('https://sandbox.iexapis.com/stable/stock/DEO/quote?token=Tpk_3958722bacd64b27b6d0ade11167a9c5');

    let promise = axios.post('http://localhost:5000/api/items', res.data);

    promise 
        .then(() => {
            console.log('Added info to db');
        })
        .catch(() => {
            console.log('FAILED DUDE');
        })
}

setInterval(() => getData(), 3000);

