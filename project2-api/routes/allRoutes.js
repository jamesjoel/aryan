const routes = require("express").Router();


routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/user/auth", require("../controllers/UserAuthController"));


module.exports = routes;