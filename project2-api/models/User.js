require("../config/db");
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    address : String,
    city : String,
    status : { type : Number, default : 1 }
})

const User = mongoose.model("user", UserSchema);

module.exports = User;
