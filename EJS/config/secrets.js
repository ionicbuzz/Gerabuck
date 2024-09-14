const dotenv = require("dotenv");
const path = require("path");

const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log(process.env);

module.exports = { ...process.env };