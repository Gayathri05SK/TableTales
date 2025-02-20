const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  guests: Number,
  datetime: Date,
  seating: String
});

module.exports = mongoose.model("Reservation", ReservationSchema);
