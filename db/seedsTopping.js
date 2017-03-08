const mongoose = require('mongoose');
const db = require('../config/db');
const Topping = require('../models/topping');

mongoose.connect(db.uri);

Topping.collection.drop();

Topping.create([{
  name: 'Double Espresso',
  price: 1.00
},{
  name: 'Chocolate',
  price: 0.5
},{
  name: 'Vanilla',
  price: 0.5
},{
  name: 'Caramel',
  price: 0.5
},{
    name: 'Mint',
    price: 0.4
},{
  name: 'Ginger',
  price: 0.5
}], (err, toppings) => {
  if(err) console.log('There was an error creating drinks', err);

  console.log(`${toppings.length} toppings created!`);
  mongoose.connection.close();
});
