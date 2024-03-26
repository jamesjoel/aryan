const routes = require("express").Router();

// localhost:8080/api/user
// localhost:8080/api/product
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/student", require("../controllers/StudentController"));

routes.use("*", require("../controllers/NotFoundController"));


module.exports = routes;

// localhost:8080/api/student