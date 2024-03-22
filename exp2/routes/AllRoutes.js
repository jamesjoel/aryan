const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"))
routes.use("/about", require("../controllers/AboutController"))
routes.use("/contact", require("../controllers/ContactController"))

module.exports = routes;