const routes = require("express").Router();
const Category = require("../models/Category");

routes.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send(result)
})
routes.get("/:id", async(req, res)=>{
    let result = await Category.find({ _id : req.params.id });
    res.send(result[0])
})
routes.post("/", async(req, res)=>{
    let result = await Category.create(req.body);
    res.send(result)
})
routes.put("/:id", async(req, res)=>{
    let result = await Category.updateMany({_id : req.params.id }, req.body);
    res.send(result)
})
routes.delete("/:id", async(req, res)=>{
    let result = await Category.deleteMany({_id : req.params.id });
    res.send(result)
})

module.exports = routes;