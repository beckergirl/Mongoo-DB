const mongoose = require("mongoose");


// VALIDACIÓN:

const TeachersSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    groups: [String]
 
})

module.exports = mongoose.model( "Teachers", TeachersSchema); 