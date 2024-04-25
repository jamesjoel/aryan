const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");

routes.post("/", async(req, res)=>{
    // console.log(req.body);
    delete req.body.repass;
    // we have to conver user password into inc
    req.body.password = sha1(req.body.password);
    
    await User.create(req.body);
    res.send({ success : true });
})

module.exports = routes;