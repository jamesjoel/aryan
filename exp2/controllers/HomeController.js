const routes = require("express").Router();



routes.get("/", (req, res)=>{
    res.send("home controller")
})

module.exports = routes;