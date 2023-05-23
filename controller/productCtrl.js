const getProduct = (req, res) => {
  const products = [
    { id: 1, name: "Apple", price: 10000 },
    { id: 2, name: "Samsung", price: 8000 },
    { id: 3, name: "Apple", price: 10500 },
  ];

  res.json(products);
  res.status(200);
};

module.exports = {
  getProduct,
};
