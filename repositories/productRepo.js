const productModel = require("../models/productModel");

const get = (options) => {
  let { page, pageSize, sort, dir, search } = options;

  let filter = {};
  if (search) {
    filter = {
      $or: [
        { brand: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    };
  }

  return productModel
    .find(filter, { _id: 0, __v: 0 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .sort({ [sort]: dir });
  ``;
};

const getCount = () => {
  return productModel.countDocuments();
};

const getById = (id) => {
  return productModel.findById(id);
};

const post = (data) => {
  const product = new productModel(data);
  return product.save();
};

const update = (data, id) => {
  return productModel.findOneAndUpdate(
    { _id: id },
    {
      brand: data.brand,
      model: data.model,
      price: data.price,
      category: data.category,
      inStock: data.inStock,
    }
  );
};

const patch = (data, id) => {
  return productModel.findOneAndUpdate({ _id: id }, data);
};

const deletePrd = (id) => {
  return productModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  getCount,
  getById,
  post,
  update,
  patch,
  deletePrd,
};
// 100
// Page Size: no of prds to display in 1 page : 10
// Pages: 10

// 105
// pagesize : 10
// pages: 10.5

// TotalPages = Math.ceil(TotalRecords/ Pages Size)
// skip = (pageNo -1) * pageSize
// limit = pageSize
