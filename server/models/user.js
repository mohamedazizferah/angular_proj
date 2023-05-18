const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  firstname: String,
  lastname: String,
  country: String,
  city: String,
  address: String,
  phone: String,
  zip: String,
  speciality: { type: String, default: "" },
  workDays: [String],
});

module.exports = mongoose.model("user", schema);
