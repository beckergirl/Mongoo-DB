//ESQUEMAS Y MODELOS:

const mongoose = require("mongoose");
const SubjectsSchema = require("./subjectsMBD")


// VALIDACIÓN:

const MarksSchema = new mongoose.Schema({

    date : Date,
    mark : Number,
    subjects: [SubjectsSchema.schema]
 
})

module.exports = mongoose.model( "Marks", MarksSchema ); 