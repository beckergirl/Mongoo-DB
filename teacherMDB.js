const mongoose = require("mongoose");

// VALIDACIÓN

const TeacherSchema = new mongoose.Schema({

    teacher_first_name: String,
    teacher_last_name: String

})

module.exports = mongoose.model("Teacher", TeacherSchema) 