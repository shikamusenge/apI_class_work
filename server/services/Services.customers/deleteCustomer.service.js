const pool = require("../../utilities/connection");

// delete customer
const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const [data] = await pool.query(
      "DELETE from customers where customer_id=?",
      [id]
    );
    res.status(200).json({ message: "customer deleted successfully ", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = deleteCustomer;
