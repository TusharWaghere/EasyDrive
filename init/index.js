const mongoose = require("mongoose");
const initData = require("./data.js");
const Cars = require("../models/car.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/cars";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Cars.deleteMany({});
  await Cars.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();