angular.module('drinksApp')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$rootScope', '$state'];
function MainController($auth, $rootScope, $state) {
  const main = this;

  // let basket = [];
  // //eg {'Latte', 2.50, [identification number], 1},{};
  //
  // function chooseDrinkAndTopping() {
  //   if(basket.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // main.chooseDrinkAndTopping = chooseDrinkAndTopping;

}
