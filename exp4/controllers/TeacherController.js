const routes = require("express").Router();
const Teacher = require("../model/Teacher");

// for CRUD system ---- then we have to create 4 diff routes

// ReST Full

routes.get("/", async(req, res)=>{ // Read
    let result = await Teacher.find();
    res.send(result);
});
routes.post("/", async(req, res)=>{ // Create
    let data = req.body; // { name : "", salary : "", subject : ""}
    await Teacher.create(data);
    res.send({ success : true });
});
routes.put("/:x", async(req, res)=>{
    let id = req.params.x;
    await Teacher.updateMany({ _id : id }, req.body);
    res.send({ success : true });
});
// parameterized URL
routes.delete("/:x", async(req, res)=>{
    let id = req.params.x;
    await Teacher.deleteMany({ _id : id });
    res.send({ success : true });
});

module.exports = routes;

/*
    callback
    promise
    asyn/await
*/