const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware/auth");

const bookingController = require("../controllers/bookingController");

router.post("/booking",isLoggedIn,wrapAsync(bookingController.createBooking));

router.get("/booking/success",bookingController.successPage);

router.get("/bookings",isLoggedIn,wrapAsync(bookingController.userBookings));

module.exports = router;