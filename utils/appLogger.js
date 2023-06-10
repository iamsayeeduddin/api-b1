const bunyan = require("bunyan");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "..", "logs");
const logPath = path.join(dir, "app.log");
if (!fs.existsSync(logPath)) {
  fs.writeFile(logPath);
}

const logger = bunyan.createLogger({
  name: "ECom",
  streams: [{ path: logPath }],
});

module.exports = logger;
