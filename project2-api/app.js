const express = require("express");
const app = express();
const routes = require("./routes/allRoutes");
const cors = require("cors");
const upload = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(upload());
app.use(cors());
app.use(routes);

const port = process.env.port || 8080;

app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})
