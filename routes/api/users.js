const router = require("express").Router();

const UserController = require("../../controllers/UserController");

router.route("/api/users")
.get(UserController.findAll)
.post(UserController.create);


module.exports = router;