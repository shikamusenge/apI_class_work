const pool = require("../../utilities/connection");
const customerSchema = require("../../utilities/customer.schema");

const addCustomer = async (req, res) => {
  try {
    const requestData = req.body;

    const { data, error } = customerSchema.safeParse(requestData);
    if (error) {
      return res.send({ error: error.message });
    } else {
      const { names, email, phone } = data;
      const [newCustomer] = await pool.query(
        "INSERT INTO customers(names, email, phone) VALUES(?,?,?)",
        [names, email, phone]
      );

      return res
        .status(201)
        .json({ message: "customer added", data: newCustomer });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = addCustomer;
