const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  brand: {
    type: String,
    required: true
  },

  model: {
    type: String,
    required: true
  },

  pricePerDay: {
    type: Number,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  vehicleType: {
    type: String,
    enum: ["Two Wheeler", "Four Wheeler"],
    required: true
  },

  seats: Number,

  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "CNG"]
  },

  available: {
    type: Boolean,
    default: true
  },

  image: {
    url: String,
    filename: String
  },

  description: String,
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
    }


});

module.exports = mongoose.model("Car", carSchema);