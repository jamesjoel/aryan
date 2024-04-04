const routes = require("express").Router();
const User = require("../models/User");

/*
    ReST API ---- http://localhost:8080/api/user

    1. http://localhost:8080/api/user   (get ---- return all data)
    2. http://localhost:8080/api/user/1245ABC   (get ---- return only "1245ABC" user data)
    3. http://localhost:8080/api/user   (post ---- incomming data ---> insert into mongodb)
    4. http://localhost:8080/api/user/1245ABC   (put ---- incomming data ---> update into mongodb)
    5. http://localhost:8080/api/user/1245ABC   (delete ---- > delete by id into mongodb)
*/

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
});
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await User.find({ _id : id });
    res.send(result[0]);
});
routes.post("/", async(req, res)=>{
    await User.create(req.body);
    res.send({ success : true });
    /*
        you have to create a object like that
        {
            id : Number,
            name : String,
            email : String,
            age : Number,
            salary : Number
        }
    */
});
routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await User.updateMany({ _id : id }, req.body);
    res.send({ success : true });
});
routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await User.deleteMany({ _id : id });
    res.send({ success : true });
});

module.exports = routes;