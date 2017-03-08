const mongoose = require('mongoose');
const db = require('../config/db');
const Topping = require('../models/topping');

mongoose.connect(db.uri);

Topping.collection.drop();

Topping.create([{
  name: 'Double Espresso',
  price: 1.00,
  identification: 1
},{
  name: 'Chocolate',
  price: 0.5,
  identification: 2
},{
  name: 'Vanilla',
  price: 0.5,
  identification: 3
},{
  name: 'Caramel',
  price: 0.5,
  identification: 4
},{
    name: 'Mint',
    price: 0.4,
    identification: 5
},{
  name: 'Ginger',
  price: 0.5,
  identification: 6
},{
  name: 'Honey',
  price: 0.5,
  identification: 7
}], (err, toppings) => {
  if(err) console.log('There was an error creating drinks', err);

  console.log(`${toppings.length} toppings created!`);
  mongoose.connection.close();
});
