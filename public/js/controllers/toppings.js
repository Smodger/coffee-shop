angular.module('drinksApp')
.controller('ToppingsIndexController', ToppingsIndexController)
.controller('ToppingsNewController', ToppingsNewController)
.controller('ToppingsShowController', ToppingsShowController)
.controller('ToppingsEditController', ToppingsEditController);



ToppingsIndexController.$inject = ['Topping'];
function ToppingsIndexController(Topping) {
  const toppingsIndex = this;

  toppingsIndex.all = Topping.query();
}
ToppingsNewController.$inject = ['Topping', '$state'];
function ToppingsNewController(Topping, $state) {
  const toppingsNew = this;

  toppingsNew.topping = {};

  function create() {
    Topping.save(toppingsNew.topping, () => {
      $state.go('toppingsIndex');
    });
  }
  toppingsNew.create = create;
}

ToppingsShowController.$inject = ['Topping', '$state'];
function ToppingsShowController(Topping, $state) {
  const toppingsShow = this;

  toppingsShow.topping = Topping.get($state.params);

  function deleteTopping() {
    toppingsShow.topping.$remove(() => {
      $state.go('toppingsIndex');
    });
  }
  this.delete = deleteTopping;
}

ToppingsEditController.$inject = ['Topping', '$state'];
function ToppingsEditController(Topping, $state) {
  const toppingsEdit = this;

  toppingsEdit.topping=Topping.get($state.params);

  function update() {
    toppingsEdit.topping.$update(() => {
      $state.go('toppingsShow',$state.params);
    });
  }
  this.update= update;

}
