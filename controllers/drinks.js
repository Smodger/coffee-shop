const Drink = require('../models/drink');

function drinksIndex(req, res) {
  Drink
    .find()
    .populate('availableTopping')
    .exec((err, drinks) => {
      if(err) return res.status(500).json({ error: err });
      return res.json(drinks);
    });
}

function drinksCreate(req, res) {
  Drink.create(req.body, (err, drink) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(drink);
  });
}

function drinksShow(req, res) {
  Drink.findById(req.params.id, (err, drink) => {
    if(err) return res.status(500).json({ error: err });
    if(!drink) return res.status(404).json({ error: 'Not found' });
    return res.json(drink);
  });
}

function drinksUpdate(req, res) {
  Drink.findById(req.params.id, (err, drink) => {
    if(err) return res.status(500).json({ error: err });
    if(!drink) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      drink[key] = req.body[key];
    }

    drink.save((err, drink) => {
      if(err) return res.status(400).json({ error: err });
      res.json(drink);
    });
  });
}

function drinksDelete(req, res) {
  Drink.findById(req.params.id, (err, drink) => {
    if(err) return res.status(500).json({ error: err });
    if(!drink) return res.status(404).json({ error: 'Not found' });

    drink.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: drinksIndex,
  create: drinksCreate,
  show: drinksShow,
  update: drinksUpdate,
  delete: drinksDelete
};
