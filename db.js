const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/Hotel';

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