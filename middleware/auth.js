const ExpressError = require("../utils/ExpressError");
const Car = require("../models/car");

module.exports.isLoggedIn = (req,res,next)=>{

    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        return res.redirect("/login");
    }

    next();
};


module.exports.isAdmin = (req,res,next)=>{

    if(!req.user || req.user.role !== "admin"){
        return next(new ExpressError(403,"Access Denied"));
    }

    next();
};

module.exports.isOwner = async(req,res,next)=>{

const {id} = req.params;

const car = await Car.findById(id);

if(!car.owner.equals(req.user._id)){
return res.send("You are not allowed to do this");
}

next();

};