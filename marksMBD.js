const mongoose = require("mongoose")
const TeacherSchema = require("./teacherMDB")

//VALIDACIÓN

const MarksSchema = new mongoose.Schema({

    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name : String,
    group_name : String , 
    subject_name:String,
    teachers : [TeacherSchema.schema]

})

module.exports = mongoose.model( "Marks", MarksSchema ); 