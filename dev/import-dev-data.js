const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tour = require("../models/Tour");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => console.log("DB connected once"))
  .catch((error) => console.log(error));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany(tours);
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(error);
  }
};

console.log(process.argv);
