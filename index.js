const express = require("express");

const app = express();

app.listen(5500, () => console.log("Server Up & running 5500"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Express JS!");
});

const products = [
  { id: 1, name: "Apple", price: 10000 },
  { id: 2, name: "Samsung", price: 8000 },
  { id: 3, name: "Apple", price: 10500 },
];
app.get("/products", (req, res) => {
  res.status(200);
  res.json(products);   
});

// HTTP Status Code
// 1xx - Informational Status Code
// 100, 101, 102
// 2xx - Success Status Code
// 200 - OK, 201 - Created, 202 - Accepted, 204 - No Content
// 3xx - Redirectional
// 4xx - 400 Bad Resquest, 401 - Unauthorized,
// 5xx - 500 - Internal Server Error
