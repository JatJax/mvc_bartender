const express = require('express');
const app = express();
const homeRouter = require('./src/routes/home');

// Use static server to serve the Express Yourself Website
//app.use(express.static('public'));

app.use('/', homeRouter, (req, res) =>{
    res.redirect('/home');
});

app.listen(8000, (req, res) =>{
    console.log('Listening on 8000');
});
