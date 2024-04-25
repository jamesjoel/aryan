const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{
    let result = await Product.find({ _id : req.params.id });
    res.send(result[0]);
})
routes.post("/", async(req, res)=>{
    let result = await Product.create(req.body)
    res.send(result);
})
routes.put("/:id", async(req, res)=>{
    let result = await Product.updateMany({_id : req.params.id }, req.body)
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{
    let result = await Product.deleteMany({_id : req.params.id })
    res.send(result);
})

module.exports = routes;