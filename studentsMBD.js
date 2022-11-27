const mongoose = require("mongoose");
const MarksSchema = require("./marksMBD")


// VALIDACIÓN:

const StudentsSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    marks: [ MarksSchema.schema ]
 
})

module.exports = mongoose.model( "Students", StudentsSchema ); 