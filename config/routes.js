const router = require('express').Router();
const drinksController = require('../controllers/drinks');
const toppingsController = require('../controllers/toppings');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/drinks')
  .get(drinksController.index)
  .post(drinksController.create);

router.route('/drinks/:id')
  .get(drinksController.show)
  .put(drinksController.update)
  .delete(drinksController.delete);

  router.route('/toppings')
    .get(toppingsController.index)
    .post(toppingsController.create);

  router.route('/toppings/:id')
    .get(toppingsController.show)
    .put(toppingsController.update)
    .delete(toppingsController.delete);

module.exports = router;
