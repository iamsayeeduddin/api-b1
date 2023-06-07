const productRepo = require("../repositories/productRepo");

const errHandler = (err, res) => {
  if (err.message && err.message.indexOf("validation failed") > -1) {
    res.status(400);
    res.json({ message: err.message });
  } else {
    res.status(500);
    res.send("Internal Server Error");
  }
};

const getOptions = (req) => {
  let sort = req.query.sort;
  let dir = req.query.dir || "";
  const pageSize = +req.params.pageSize;
  const page = +req.params.page;
  const search = req.query.search || "";

  if (!sort) {
    sort = "price";
    if (!dir) {
      dir = "desc";
    }
  }

  return {
    sort,
    dir,
    pageSize,
    page,
    search,
  };
};

const get = async (req, res) => {
  try {
    const options = getOptions(req);
    const data = await productRepo.get(options);
    const totalRecord = await productRepo.getCount();
    const totalPages = Math.ceil(totalRecord / options.pageSize);

    const products = {
      metadata: {
        totalRecord,
        totalPages,
      },
      data: data,
    };

    res.status(200);
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send("Internal Server Error");
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productRepo.getById(id);
  if (product) {
    res.status(200);
    res.json(product);
  } else {
    res.status(404);
    res.send("Not Found");
  }
};

const create = async (req, res) => {
  try {
    await productRepo.post(req.body);
    res.status(201);
    res.send("Created");
  } catch (err) {
    errHandler(err, res);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await productRepo.update(body, id);
    res.status(200);
    res.send("Updated");
  } catch (err) {
    errHandler(err, res);
  }
};

const patchProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await productRepo.patch(body, id);
    res.status(200);
    res.send("Updated");
  } catch (error) {
    err(error, res);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await productRepo.deletePrd(id);
    res.status(200);
    res.send("Deleted");
  } catch (error) {
    errHandler(err, res);
  }
};

module.exports = {
  get,
  getProductById,
  create,
  updateProduct,
  patchProduct,
  deleteProduct,
};
