const mongoose = require('mongoose');
const db = require('../config/db');
const Drink = require('../models/drink');
const Topping = require('../models/topping');

mongoose.connect(db.uri);

Drink.collection.drop();
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
  return Drink.create([{
    name: 'Latte',
    price: 2.50,
    availableTopping:  [toppings[0], toppings[1], toppings[2], toppings[3], toppings[5], toppings[6]]
  },{
    name: 'Cappuccino',
    price: 2.50,
    availableTopping:  [toppings[0], toppings[1], toppings[2], toppings[3] , toppings[5] , toppings[6]]
  },{
    name: 'Tea',
    price: 2.00,
    availableTopping: [toppings[4] ,toppings[5] , toppings[6]]
  },{
    name: 'Flat-White',
    price: 2.50,
    availableTopping:  [toppings[0] , toppings[1], toppings[2] , toppings[3] , toppings[5] , toppings[6]]
  },{
    name: 'Espresso',
    price: 2.00,
    availableTopping:  [toppings[0] , toppings[1] , toppings[2] , toppings[3] , toppings[5] , toppings[6]]
  }], (err, drinks) => {
    console.log(`${drinks.length} drinks created!`);
    mongoose.connection.close();
  });
});
