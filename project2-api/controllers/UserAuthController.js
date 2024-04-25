const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken");
const KEY = require("../config/TOKEN_KEY");


routes.post("/", async(req, res)=>{
    let u = req.body.username;
    let p = req.body.password;
    
    let result = await User.find({ email : u });
    // if result is empty then user not registred
    // if result have data then user is registed

    if(result.length > 0)
    {
        if(result[0].password == sha1(p))
        {
            // unique string -- Token
            let userobj = { id : result[0]._id };
            let token = jwt.sign(userobj, KEY);

            res.send({ success : true, token : token });
        }
        else{

            res.send({ success : false, errType : 2})
        }
    }
    else{
        res.send({ success : false, errType : 1})
    }
    
})

module.exports = routes;

/*
    result  =  Model.find()   get all data

    result  =  Model.find({ _id : 12451 })   get data by id

    result = Model.find({ city : "indore" }) get data by city




    Gmail  ---- 

            Visiter Pages --- About, Help, Login, Signup, Home, Terms
            User Pages  ---- Inbox, SendItem, Compose, My-Profile, Setting, ....



    Token ------ info+"string"  ------- 456ABC123

    456ABC123+"string"  ----- info


    { email : "aryan@gmail.com" } + "hello"(key)   -------- 7410ABC258


    7410ABC258 + "hello(key)" ----- { email : "aryan@gmail.com" }

*/