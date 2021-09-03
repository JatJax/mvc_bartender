const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Use static server to serve the Express Yourself Website
//app.use(express.static('public'));

//Uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Imported Routes
const homeRouter = require('./src/routes/home');
app.use('/', homeRouter, (req, res) =>{
    //res.redirect('/home');
});

//Connect to DB
mongoose.connect('mongodb+srv://TJanth:alchohol@cluster0.mcfkl.mongodb.net/bartender-app?retryWrites=true&w=majority', () =>{
    console.log('Connected to DB!');
});


//Listening
app.listen(8000, (req, res) =>{
    console.log('Listening on 8000..');
});