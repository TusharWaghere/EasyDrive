const Car = require("../models/car");
const ExpressError = require("../utils/ExpressError");

module.exports.home = async (req,res)=>{

const {location} = req.query;

let allCar;

if(location){
allCar = await Car.find({
location:{$regex:location,$options:"i"}
});
}else{
allCar = await Car.find({});
}

res.render("cars/index",{allCar});
};

module.exports.showCar = async(req,res,next)=>{

const {id} = req.params;

const car = await Car.findById(id);

if(!car){
return next(new ExpressError(404,"Car not found"));
}

res.render("cars/show",{car});
};