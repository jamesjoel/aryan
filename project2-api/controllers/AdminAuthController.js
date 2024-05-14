const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")
const key = require("../config/TOKEN_KEY")

routes.post("/", async(req, res)=>{
    let u = req.body.username;
    let p = req.body.password;
    let result = await Admin.find({ $and : [ { username : u }, { password : sha1(p) } ]});
    if(result.length > 0)
    {
        let obj = { id : result[0]._id };
        let token = jwt.sign(obj, key, { expiresIn : 15 });
        /*
                200s
                15
                2h
                10d
                365d
        */
        res.send({ success : true, token : token });
    }
    else{
        res.send({ success : false });
    }
    
})




module.exports = routes;