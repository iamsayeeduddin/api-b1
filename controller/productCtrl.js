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

const newProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201);
  res.send("Created Succesfully!");
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;

  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  res.status(200);
  res.send("Product Deleted");
};

// Full Update
const updateProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;

    res.status(204).send("Done");
  } else {
    res.status(404).json({ message: "Not Found" });
  }
};

const patch = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  if (product) {
    for (const key in req.body) {
      product[key] = req.body[key];
    }

    res.status(204).send("Done");
  } else {
    res.status(404).json({ message: "Not Found" });
  }
};

module.exports = {
  getProduct,
  getProductById,
  newProduct,
  deleteProduct,
  updateProduct,
  patch,
};

// REST API
