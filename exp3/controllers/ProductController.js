const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("product")
})

module.exports = routes;