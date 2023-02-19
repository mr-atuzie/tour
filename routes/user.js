const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(val);
  next();
});

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
