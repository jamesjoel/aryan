const routes = require("express").Router();

routes.get("/", (req, res)=>{
    let arr = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        }
    ]
    res.send(arr)
})
// localhost:8080/api/user/all

routes.get("/all", (req, res)=>{
    res.send("all user")
})

module.exports = routes;