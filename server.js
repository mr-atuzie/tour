const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log("DB connection successful"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}...`);
});
