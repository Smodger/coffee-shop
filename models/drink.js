const mongoose = require('mongoose');

const drinksSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  availableTopping:[{ type: Number, ref:'Topping' }]
});

module.exports = mongoose.model('Drink', drinksSchema);
