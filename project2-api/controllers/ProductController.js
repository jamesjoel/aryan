const routes = require("express").Router();
const Product = require("../models/Product");
const path = require("path");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})




routes.post("/", async(req, res)=>{
   
    let image = req.files.image;

    image.mv(path.resolve()+"/assets/products/"+image.name, async(err)=>{
        req.body.image = image.name;
        let result = await Product.create(req.body)
        res.send(result);
    });
})




routes.put("/:id", async(req, res)=>{
    let result = await Product.updateMany({_id : req.params.id }, req.body)
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{
    let result = await Product.deleteMany({_id : req.params.id })
    res.send(result);
})


routes.get("/total", async(req, res)=>{
    let result = await Product.countDocuments();
    // console.log(result)
    res.send({total : result});
})


routes.get("/:id", async(req, res)=>{
    let result = await Product.find({ _id : req.params.id });
    res.send(result[0]);
})

module.exports = routes;
/*
    nodejs
            express
            mongoose
            sha1
            jsonwebtoken
            express-fileupload
            cors

*/