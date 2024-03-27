// conntact to db
require("../config/db");

const mongoose = require("mongoose");

// now create our schema
const TeacherSchema = mongoose.Schema({
    name : String,
    subject : String,
    salary : Number
})
// create our model
const Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;