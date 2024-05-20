const pool = require("../../utilities/connection");
const customerSchema = require("../../utilities/customer.schema");

const updateCustomer = async (req, res) => {
  try {
    const requestData = req.body;
    const id = req.params.id;
    const { data, error } = customerSchema.safeParse(requestData);
    if (error) {
      return res.send({ error: error.message });
    } else {
      const { names, email, phone } = data;
      const [newCustomer] = await pool.query(
        "UPDATE customers SET names=?, email=?, phone=? WHERE customer_id=?",
        [names, email, phone, id]
      );

      return res
        .status(201)
        .json({ message: "customer updated successfully", data: newCustomer });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = updateCustomer;
