const router = require("express").Router();
const UserRoutes = require("./api/users");

//  routes
router.use("/", UserRoutes);

module.exports = router;