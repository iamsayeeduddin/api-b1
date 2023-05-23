const express = require("express");

const defaultRoute = require("./routes/defaultRoute");

const app = express();

app.listen(5500, () => console.log("Server Up & running 5500"));

// app.get("/", defaultCtrl.get);
// app.get("/health", defaultCtrl.health);

// app.get("/products", productCtrl.getProduct);

app.use("/", defaultRoute);

// Routers - Express JS

// baseURL /
