const express = require("express");
const {
  getAllCustomers,
  getCustomer,
} = require("../services/Services.customers/getCustormer.service");
const addCustomer = require("../services/Services.customers/addCustomer.service");
const updateCustomer = require("../services/Services.customers/updateCustomer.service");
const deleteCustomer = require("../services/Services.customers/deleteCustomer.service");

const router = express.Router();

router.get("/", getAllCustomers);
router.get("/:id", getCustomer);
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
module.exports = router;
