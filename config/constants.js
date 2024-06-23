const path = require("path");

const PORT = 3100;
const ROOT_DIR = path.resolve(__dirname, "..");

const TS = /\.(ts)$/;
const JS = /\.(js)$/;

module.exports = {
  ROOT_DIR,
  PORT,
  TS,
  JS,
};
