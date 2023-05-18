const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  description: String,
  date: String,
  time: String,
  duration: String,
  patientId: String,
  doctorId: String,
  status: Boolean,
});

module.exports = mongoose.model("appointment", schema);
