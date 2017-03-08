angular.module('drinksApp')
.factory('Topping', Topping);

Topping.$inject = ['$resource'];
function Topping($resource){
  return new $resource('/toppings/:id', {id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
