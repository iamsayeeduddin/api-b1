const get = (req, res) => {
  res.send("Hello Express JS!");
  res.status(200);
};

const health = (req, res) => {
  res.send("Server is up & running!");
  res.status(200);
};

module.exports = {
  get,
  health,
};
