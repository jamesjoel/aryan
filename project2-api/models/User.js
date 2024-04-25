require("../config/db");
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    address : String,
    city : String
})

const User = mongoose.model("user", UserSchema);

module.exports = User;
