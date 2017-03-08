angular.module('drinksApp')
.factory('Drink', Drink);

Drink.$inject = ['$resource'];
function Drink($resource){
  return new $resource('/drinks/:id', {id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
