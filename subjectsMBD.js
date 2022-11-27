const mongoose = require("mongoose");
const TeachersSchema = require("./teachersMBD");


// VALIDACIÓN:

const SubjectsSchema = new mongoose.Schema({

    title: String,
    teachers: [TeachersSchema.schema]

})
/* TeachersSchema.add({subjects: [SubjectsSchema]}); */

module.exports = mongoose.model( "Subjects", SubjectsSchema ); 

