const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/home', (req, res) =>{
    res.send('We are on home!');
});


module.exports = homeRouter;