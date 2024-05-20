const express = require("express");
const cors = require("cors");
const app = express();
const customers = require("./router/customer");
const limiter = require("./utilities/ratelimit");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use(limiter);
app.use("/api-docs", swaggerUi.serve);
const Auth = require("./midleware/Authrize");
const appKey = require("./utilities/keyGen");
app.use(cors());
app.use(express.json());
// app.use(limiter());
app.get("/api-docs", swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to my api" });
});
app.use("/api/v1/customers", Auth, customers);
console.log(`access key = ${appKey}`);
app.listen(3002, () => console.log(`app is learning on localhost 3002`));