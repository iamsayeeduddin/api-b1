const express = require("express");
const bodyParser = require("body-parser");

const defaultRoute = require("./routes/defaultRoute");
const productRoute = require("./routes/productRoute");
const mongoose = require("mongoose");

const app = express();

app.listen(5500, () => console.log("Server Up & running 5500"));

mongoose
  .connect("mongodb://127.0.0.1:27017/api-b1")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
// app.get("/", defaultCtrl.get);
// app.get("/health", defaultCtrl.health);

// app.get("/products", productCtrl.getProduct);

app.use("/", defaultRoute);
app.use("/products", productRoute);

// Routers - Express JS

// baseURL /
// Driver - Mongoose
// MongoDB - Schemeless DB
// Schema - Structure for a particular Data Document
