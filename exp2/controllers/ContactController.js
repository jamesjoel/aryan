const routes = require("express").Router();



routes.get("/", (req, res)=>{
    res.send("contact controller")
})
routes.get("/local", (req, res)=>{
    res.send("local controller")
})
routes.get("/global", (req, res)=>{
    res.send("global controller")
})


module.exports = routes;