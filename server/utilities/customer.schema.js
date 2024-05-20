const { z } = require("zod");

const customerSchema = z.object({
  names: z.string().max(100, "too long name intered").min(2, "too short name"),
  email: z.string().max(100, "too long name intered").min(2, "too short name"),
  phone: z.string().max(10, "too long name intered").min(10, "too short name"),
});

module.exports = customerSchema;
