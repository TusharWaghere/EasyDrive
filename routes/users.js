const express = require("express");
const router = express.Router();

const passport = require("passport");

const usersController = require("../controllers/usersController");
const {isLoggedIn} = require("../middleware/auth");

router.get("/signup",usersController.renderSignup);
router.post("/signup",usersController.signup);

router.get("/login",usersController.renderLogin);

router.post("/login",
passport.authenticate("local",{failureRedirect:"/login"}),
usersController.login
);

router.get("/logout",usersController.logout);

router.get("/profile",isLoggedIn,usersController.profile);

module.exports = router;