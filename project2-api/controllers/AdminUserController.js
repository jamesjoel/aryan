const routes = require("express").Router();
const User = require("../models/User");

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

routes.post("/changestatus", async(req, res)=>{
    await User.updateMany({_id : req.body._id}, req.body);
    res.send({success : true});
})

module.exports = routes;