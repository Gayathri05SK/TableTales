const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Fullname: String,
    phonenumber: String,
    deliveryaddress: String,
    paymentMethod: String,
    items: [{ name: String, quantity: Number }],
    totalPrice: Number,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model('Order', OrderSchema);
