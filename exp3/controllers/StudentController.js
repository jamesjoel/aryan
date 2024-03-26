const routes = require("express").Router();
const mongoose = require("mongoose");

/*
1. we have to connect nodejs into mongodb wia connection string
2. we have to create a database schema
3. write a function to get data from databse

*/
// mongoose.connect("mongodb://0.0.0.0:27017/dbname") ---- for local
mongoose.connect("mongodb://0.0.0.0:27017/aryan");


let StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    fee : Number
})
let StudentModel = mongoose.model("student", StudentSchema);


routes.get("/", async(req, res)=>{
    let result = await StudentModel.find();
    res.send(result);
})
// localhost:8080/api/student/form
// it not an api
// routes.get("/form", (req, res)=>{
//     res.sendFile(__dirname+"/myform.html");
// })

routes.post("/save", async(req, res)=>{
    await StudentModel.create(req.body);
    res.send("saved");
})





module.exports = routes;