const express = require("express");

const defaultRoute = require("./routes/defaultRoute");
const productRoute = require("./routes/productRoute");

const app = express();

app.listen(5500, () => console.log("Server Up & running 5500"));

// app.get("/", defaultCtrl.get);
// app.get("/health", defaultCtrl.health);

// app.get("/products", productCtrl.getProduct);

app.use("/", defaultRoute);
app.use("/products", productRoute);

// Routers - Express JS

// baseURL /
