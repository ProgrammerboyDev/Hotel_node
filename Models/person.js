const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    username:{
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    }
});

const person = mongoose.model('person', personschema);


module.exports = person;