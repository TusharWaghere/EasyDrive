const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const carsController = require("../controllers/carsController");

router.get("/home",wrapAsync(carsController.home));

router.get("/cars/:id",wrapAsync(carsController.showCar));

module.exports = router;