require("../config/db");

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    age : Number,
    salary : Number
})

const User = mongoose.model("user", UserSchema);

module.exports = User;