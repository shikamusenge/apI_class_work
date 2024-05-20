const pool = require("../../utilities/connection");

// get all customers
const getAllCustomers = async (req, res) => {
  try {
    const [data] = await pool.query("SELECT * from customers");
    console.log();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get single customers
const getCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const [data] = await pool.query(
      "SELECT * from customers where customer_id=?",
      [id]
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllCustomers, getCustomer };
