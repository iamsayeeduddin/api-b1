const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = require("./utils/appLogger");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const defaultRoute = require("./routes/defaultRoute");
const productRoute = require("./routes/productRoute");
const config = require("./config/config");

const app = express();

const dir = path.join(__dirname, "logs");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const filePath = path.join(__dirname, "logs", "request.log");
const stream = fs.createWriteStream(filePath);

app.use(morgan("combined", { stream: stream }));

app.listen(5500, () => console.log("Server Up & running 5500"));

logger.info({ message: "Server is Running", portNo: 5500 });

mongoose
  .connect(process.env.dbUrl || config.dbUrl)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use("/", defaultRoute);
app.use("/products", productRoute);

// morgan
// Logging Levels: INFO, ERR, Warning, Debug
