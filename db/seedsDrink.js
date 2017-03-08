const mongoose = require('mongoose');
const db = require('../config/db');
const Drink = require('../models/drink');

mongoose.connect(db.uri);

Drink.collection.drop();

Drink.create([{
  name: 'Latte',
  price: 2.50,
  availableTopping:  [1, 2, 3, 4, 6, 7]
},{
  name: 'Cappuccino',
  price: 2.50,
  availableTopping:  [1, 2, 3, 4 , 6 , 7]
},{
  name: 'Tea',
  price: 2.00,
  availableTopping: [5 ,6 , 7]
},{
  name: 'Flat-White',
  price: 2.50,
  availableTopping:  [1 , 2 , 3 , 4 , 6 , 7]
},{
  name: 'Espresso',
  price: 2.00,
  availableTopping:  [1 , 2 , 3 , 4 , 6 , 7]
}
], (err, drinks) => {
  if(err) console.log('There was an error creating drinks', err);

  console.log(`${drinks.length} drinks created!`);
  mongoose.connection.close();
});
