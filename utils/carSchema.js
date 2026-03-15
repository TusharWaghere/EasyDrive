const Joi = require("joi");

module.exports.carSchema = Joi.object({
  title: Joi.string().required(),

  brand: Joi.string().required(),

  model: Joi.string().required(),

  pricePerDay: Joi.number().min(1).required(),

  location: Joi.string().required(),

  vehicleType: Joi.string()
  .valid("Two Wheeler", "Four Wheeler")
  .required(),

  seats: Joi.number().min(1),

  fuelType: Joi.string()
  .valid("Petrol", "Diesel", "Electric", "CNG"),

  imageUrl: Joi.string().allow("", null),

  description: Joi.string().allow("", null)

});