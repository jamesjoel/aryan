const routes = require("express").Router();
const User = require("../models/User");

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

routes.post("/", async(req, res)=>{
    let result = await User.create(req.body)
    res.send(result);
})
routes.put("/:id", async(req, res)=>{
    let result = await User.updateMany({_id : req.params.id }, req.body)
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{
    let result = await User.deleteMany({_id : req.params.id })
    res.send(result);
})

routes.get("/total", async(req, res)=>{
    let result = await User.countDocuments();
    // console.log(result)
    res.send({total : result});
})

routes.get("/:id", async(req, res)=>{
    let result = await User.find({ _id : req.params.id });
    res.send(result[0]);
})

module.exports = routes;