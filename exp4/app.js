const express = require("express");
const app = express();

// these 2 function call for revecie json formated Form Data
app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.use(require("./routes/AllRoutes"));


let port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server Running With Port ", port);
})