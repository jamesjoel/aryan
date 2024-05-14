const routes = require("express").Router();
const Admin = require("../models/Admin")
const sha1 = require("sha1")

routes.get("/username", async(req, res)=>{
    let result = await Admin.find();
    res.send({ result : result[0]});
})

routes.post("/username", async(req, res)=>{
    // console.log(req.body);
    await Admin.updateMany({}, req.body);
    res.send({ success : true })
})
routes.post("/password", async(req, res)=>{
    req.body.password = sha1(req.body.password);
    await Admin.updateMany({}, req.body);
    res.send({ success : true })
})

module.exports = routes;