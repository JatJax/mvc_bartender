const express = require('express');
const userRoute = require('./src/routes/User');
const app = express();

app.use('/', userRoute);

app.listen(8000, (req, res) =>{
    console.log('Listening on 8000');
})


