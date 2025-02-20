const express = require("express");
const Reservation = require("../models/Reservation");

const router = express.Router();

router.post("/reserve", async (req, res) => {
  try {
    const { name, email, guests, datetime, seating } = req.body;

    if (!name || !email || !guests || !datetime || !seating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const reservation = new Reservation({ name, email, guests, datetime, seating });
    await reservation.save();

    res.status(201).json({ message: "Table reserved successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Get all reservations (for admin)
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
