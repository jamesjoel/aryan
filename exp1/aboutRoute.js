let routes = require("express").Router();

routes.get("/info1", (req, res)=>{
    res.send("about info 1");
})
routes.get("/info2", (req, res)=>{
    res.send("about info 2");
})
routes.get("/info3", (req, res)=>{
    res.send("about info 3");
})
routes.get("/info4", (req, res)=>{
    res.send("about info 4");
})

module.exports = routes;