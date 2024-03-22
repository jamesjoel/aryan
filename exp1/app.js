let express = require("express")
let app = express()

app.get("/", (req, res)=>{
   res.send("hello world") 
})
// app.get("/about", (req, res)=>{
//    res.send("about page") 
// })
// app.get("/about/info", (req, res)=>{
//    res.send("about page") 
// })
// app.get("/about/info2", (req, res)=>{
//    res.send("about page") 
// })
// app.get("/about/info3", (req, res)=>{
//    res.send("about page") 
// })
// app.get("/about/info4", (req, res)=>{
//    res.send("about page") 
// })


app.use("/about", require("./aboutRoute"));

// callback function
app.listen(3000, ()=>{
    console.log("server running");
});
