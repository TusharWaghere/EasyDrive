const { carSchema } = require("../utils/carSchema");
const ExpressError = require("../utils/ExpressError");

module.exports.validateCar = (req, res, next) => {

  const { error } = carSchema.validate(req.body);

  if (error) {

    const msg = error.details.map(el => el.message).join(",");

    throw new ExpressError(400, msg);

  } else {

    next();

  }

};