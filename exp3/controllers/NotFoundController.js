const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("data not found")
})


module.exports = routes;