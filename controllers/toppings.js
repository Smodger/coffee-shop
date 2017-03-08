const Topping = require('../models/topping');

function toppingsIndex(req, res) {
  Topping.find((err, toppings) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(toppings);
  });
}

function toppingsCreate(req, res) {
  Topping.create(req.body, (err, topping) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(topping);
  });
}

function toppingsShow(req, res) {
  Topping.findById(req.params.id, (err, topping) => {
    if(err) return res.status(500).json({ error: err });
    if(!topping) return res.status(404).json({ error: 'Not found' });
    return res.json(topping);
  });
}

function toppingsUpdate(req, res) {
  Topping.findById(req.params.id, (err, topping) => {
    if(err) return res.status(500).json({ error: err });
    if(!topping) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      topping[key] = req.body[key];
    }

    topping.save((err, topping) => {
      if(err) return res.status(400).json({ error: err });
      res.json(topping);
    });
  });
}

function toppingsDelete(req, res) {
  Topping.findById(req.params.id, (err, topping) => {
    if(err) return res.status(500).json({ error: err });
    if(!topping) return res.status(404).json({ error: 'Not found' });

    topping.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: toppingsIndex,
  create: toppingsCreate,
  show: toppingsShow,
  update: toppingsUpdate,
  delete: toppingsDelete
};
