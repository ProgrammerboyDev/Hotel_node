const express = require('express');
const app = express();
const db = require('./db');

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

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
} );