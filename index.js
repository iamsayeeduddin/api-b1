const http = require("http");
const fs = require("fs");

const handler = (req, res) => {
  switch (req.url) {
    case "/books":
      res.write("This is a Books Endpoint");
      break;
    case "/products":
      const products = [
        { id: 1, name: "Apple", price: 10000 },
        { id: 2, name: "Samsung", price: 8000 },
        { id: 3, name: "Apple", price: 10500 },
      ];
      res.write(JSON.stringify(products));
      break;

    case "/html":
      const content = fs.readFileSync("index.html");
      res.write(content);

    default:
      res.write("Welcome to NodeJS!");
      break;
  }

  res.end();
};

const server = http.createServer(handler);

server.listen(5000);

// REST API
// API - HTTP
