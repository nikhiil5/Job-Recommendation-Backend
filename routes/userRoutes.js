const express= require("express");
const router = express.Router();
const {getUsers, getrecommendations } = require("../controller/userController");

router.route("/").get(getUsers).post(getrecommendations);       // returns job recommendation based on the user profile

module.exports = router;