const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;

const bodyparser  = require('body-parser');

app.use(bodyparser.json());

app.get('/', function(req, res){
    res.send("Welcome to our Hotel");
});

app.get('/Idli', function(req, res){
    res.send("This place serve idli");
})

// import the router file
const personRoutes = require('./routes/personRouter');

// use the routes
app.use('/person', personRoutes);

app.listen(port,()=> {
    console.log("server is running on port 3000")
} );