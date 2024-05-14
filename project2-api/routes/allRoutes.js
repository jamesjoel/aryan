const routes = require("express").Router();


routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/user/auth", require("../controllers/UserAuthController"));
routes.use("/api/admin/auth", require("../controllers/AdminAuthController"));
routes.use("/api/admin/profile", require("../controllers/AdminProfileController"));
routes.use("/api/admin/users", require("../controllers/AdminUserController"));
routes.use("/api/user/info", require("../controllers/UserController"));


module.exports = routes;