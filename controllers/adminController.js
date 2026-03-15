const Car = require("../models/car");
const Booking = require("../models/booking");
const User = require("../models/user");

module.exports.dashboard = async(req,res)=>{

const totalCars = await Car.countDocuments();
const totalBookings = await Booking.countDocuments();
const totalUsers = await User.countDocuments();

res.render("admin/dashboard",{
totalCars,
totalBookings,
totalUsers
});
};

module.exports.renderAddCar = (req,res)=>{
res.render("admin/addCar");
};

module.exports.createCar = async(req,res)=>{

const {
title,brand,model,pricePerDay,location,
vehicleType,seats,fuelType,imageUrl,description
} = req.body;

const newCar = new Car({
title,
brand,
model,
pricePerDay,
location,
vehicleType,
seats,
fuelType,

image:{
url:imageUrl,
filename:"carImage"
},

description,

owner:req.user._id   
});

await newCar.save();

res.redirect("/home");
};

/* EDIT PAGE */

module.exports.renderEditCar = async(req,res)=>{

const {id} = req.params;

const car = await Car.findById(id);

res.render("admin/editCar",{car});

};


/* UPDATE */

module.exports.updateCar = async(req,res)=>{

const {id} = req.params;

const {
title,
brand,
model,
pricePerDay,
location,
vehicleType,
seats,
fuelType,
imageUrl,
description
} = req.body;

await Car.findByIdAndUpdate(id,{

title,
brand,
model,
pricePerDay,
location,
vehicleType,
seats,
fuelType,

image:{
url:imageUrl,
filename:"carImage"
},

description

});

res.redirect(`/cars/${id}`);

};


/* DELETE */

module.exports.deleteCar = async(req,res)=>{

const {id} = req.params;

await Car.findByIdAndDelete(id);

res.redirect("/home");

};