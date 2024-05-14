require("../config/db");

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    detail : String,
    image : { type : String, default : "" },
    category : String,
    type : String,
    image : String

})

module.exports = mongoose.model("product", ProductSchema);