const mongoose = require('mongoose');

const toppingsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  identification: {type: Number, required: true },
});

module.exports = mongoose.model('Topping', toppingsSchema);
