const express = require("express");
const app = express();

// console.log(app);


app.use(require("./routes/AllRoutes"));


let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server Running ", port)
});

/*
    1.  /about
        /about/info
        /about/more
        /about/more/data

    2.  /contact
        /contact/local
        /contact/global

    3.  /  (home)

    
    
    4.  wild-card route




    http://domain.com/primaryRoute/Sub-Route/Sub-Route/Params/Params/Params


    A. Snace Case               ---- full_name, home_controller, user_father_name
    B. Camle Case               ---- fullName, homeController, userFatherName
    C. Pascle Case              ---- FullName, HomeController, UserFatherName

*/




