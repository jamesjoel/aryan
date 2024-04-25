require("../config/db");

const mongoose = require("mongoose");

const CateSchema = mongoose.Schema({
    name : String
})

const Cate = mongoose.model("category", CateSchema);

module.exports = Cate;