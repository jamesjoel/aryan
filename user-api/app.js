const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(require("./routes/AllRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("server running with port ", port);
})