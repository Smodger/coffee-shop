angular.module('drinksApp')
.controller('DrinksIndexController', DrinksIndexController)
.controller('DrinksNewController', DrinksNewController)
.controller('DrinksShowController', DrinksShowController)
.controller('DrinksEditController', DrinksEditController);

DrinksIndexController.$inject = ['Drink'];
function DrinksIndexController(Drink) {
  const drinksIndex = this;
  drinksIndex.selectedDrink = null;
  drinksIndex.toppingsVisible = false;
  drinksIndex.orderItem = [];
  drinksIndex.basket = [];

  drinksIndex.all = Drink.query();

  function addToOrderItem (obj, isDrink){
    if(isDrink) drinksIndex.selectedDrink = obj;

    drinksIndex.orderItem.push(obj);
    console.log("obj",obj);
    drinksIndex.toppingsVisible = true;
    drinksIndex.orderItem.length = Math.min(drinksIndex.orderItem.length, 3);
  }
  drinksIndex.addToOrderItem = addToOrderItem;

  function addToBasket(orderItem) {
    drinksIndex.basket = orderItem;
    console.log(drinksIndex.basket);
  }
  drinksIndex.addToBasket = addToBasket;


  // function chooseDrinkAndTopping() {
  //   if(basket.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // drinksIndex.chooseDrinkAndTopping = chooseDrinkAndTopping;
}

DrinksNewController.$inject = ['Drink', '$state'];
function DrinksNewController(Drink, $state) {
  const drinksNew = this;

  drinksNew.drink = {};

  function create() {
    Drink.save(drinksNew.drink, () => {
      $state.go('drinksIndex');
    });
  }
  drinksNew.create = create;
}

DrinksShowController.$inject = ['Drink', '$state'];
function DrinksShowController(Drink, $state) {
  const drinksShow = this;

  drinksShow.drink = Drink.get($state.params);

  function deleteDrink() {
    drinksShow.drink.$remove(() => {
      $state.go('drinksIndex');
    });
  }
  this.delete = deleteDrink;
}

DrinksEditController.$inject = ['Drink', '$state'];
function DrinksEditController(Drink, $state) {
  const drinksEdit = this;

  drinksEdit.drink=Drink.get($state.params);

  function update() {
    drinksEdit.drink.$update(() => {
      $state.go('drinksShow',$state.params);
    });
  }
  this.update= update;

}
