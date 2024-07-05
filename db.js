const mongoose = require('mongoose');

require('dotenv').config();

//const mongoURL = 'MONGODB_URL_LOCAL';
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () =>{
    console.log("MongoDB is connected");
})

db.on("error", ()=>{
    console.log("MongoDB connection error");
})

db.on("disconnected", ()=>{
    console.log("MongoDB is disconnected");
})


module.exports = db;