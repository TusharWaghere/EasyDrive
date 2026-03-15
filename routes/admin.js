const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");

const adminController = require("../controllers/adminController");

const {isLoggedIn,isAdmin} = require("../middleware/auth");

const { validateCar } = require("../middleware/validateCar");

const {isOwner} = require("../middleware/auth");

router.get("/dashboard",
isLoggedIn,
isAdmin,
wrapAsync(adminController.dashboard)
);

router.get("/cars/new",
isLoggedIn,
isAdmin,
adminController.renderAddCar
);

router.post("/cars",
isLoggedIn,
isAdmin,
validateCar,
wrapAsync(adminController.createCar)
);

/* EDIT CAR PAGE */
router.get("/cars/:id/edit",
isLoggedIn,
isAdmin,
wrapAsync(adminController.renderEditCar)
);

router.put(
"/cars/:id",
isLoggedIn,
isAdmin,
isOwner,
wrapAsync(adminController.updateCar)
);

router.delete(
"/cars/:id",
isLoggedIn,
isAdmin,
isOwner,
wrapAsync(adminController.deleteCar)
);

module.exports = router;