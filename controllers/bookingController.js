const Booking = require("../models/booking");

module.exports.createBooking = async(req,res)=>{

const {carId,startDate,endDate,pickupLocation} = req.body;

const newBooking = new Booking({
car:carId,
user:req.user._id,
startDate,
endDate,
pickupLocation
});

await newBooking.save();

await Car.findByIdAndUpdate(carId, { available: false });


res.redirect("/booking/success");
};

module.exports.successPage = (req,res)=>{
res.render("booking/success");
};

module.exports.userBookings = async(req,res)=>{

const bookings = await Booking.find({user:req.user._id})
.populate("car");

res.render("users/bookings",{bookings});
};