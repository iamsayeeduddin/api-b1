// In Memory Database
const products = [
  { id: 1, name: "Apple", price: 10000 },
  { id: 2, name: "Samsung", price: 8000 },
  { id: 3, name: "Apple", price: 10500 },
];

const getProduct = (req, res) => {
  res.json(products);
  res.status(200);
};

const getProductById = (req, res) => {
  const id = +req.params.id;

  // for (let index = 0; index < products.length; index++) {
  //   if (products[index].id === id) {
  //     res.json(products[index]);
  //     res.status(200);
  //     return;
  //   }
  //   res.send("Not Found");
  //   res.status(404);
  // }

  const product = products.find((p) => p.id === id);

  if (product) {
    res.status(200);
    res.json(product);
  } else {
    res.status(404);
    res.send("Not Found");
  }
};

module.exports = {
  getProduct,
  getProductById,
};
