const routes = require("express").Router();



routes.get("/", (req, res)=>{
    res.send("about controller")
})
routes.get("/info", (req, res)=>{
    res.send("info controller")
})
routes.get("/more", (req, res)=>{
    res.send("more controller")
})
routes.get("/more/data", (req, res)=>{
    res.send("more data controller")
})

module.exports = routes;