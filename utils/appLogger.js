const bunyan = require("bunyan");
const path = require("path");

const dir = path.join(__dirname, "..", "logs");

const logger = bunyan.createLogger({
  name: "ECom",
  streams: [{ path: path.join(dir, "app.log") }],
});

module.exports = logger;
