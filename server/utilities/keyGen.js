const crypto = require("node:crypto");
const keyGen = () => {
  const newKey = crypto.randomBytes(12).toString("hex");
  return newKey;
};

const appKey = keyGen();
module.exports = appKey;
