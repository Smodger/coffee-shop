angular
.module('drinksApp', ['ngResource', 'ui.router', 'satellizer'])
.config(Router)
.config(Auth);


Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
.state('drinksIndex', {
    url: '/drinks',
    templateUrl: '/templates/drinksIndex.html',
    controller: 'DrinksIndexController as drinksIndex'
  })
.state('drinksNew', {
  url: '/drinks/new',
  templateUrl: '/templates/drinksNew.html',
  controller: 'DrinksNewController as drinksNew'
})
.state('drinksShow', {
  url: '/drinks/:id',
  templateUrl: '/templates/drinksShow.html',
  controller: 'DrinksShowController as drinksShow'
})
.state('drinksEdit', {
  url: '/drinks/:id/edit',
  templateUrl: '/templates/drinksEdit.html',
  controller: 'DrinksEditController as drinksEdit'
})
.state('toppingsIndex', {
    url: '/topping',
    templateUrl: '/templates/toppingsIndex.html',
    controller: 'ToppingsIndexController as toppingsIndex'
  })
.state('toppingsNew', {
  url: '/toppings/new',
  templateUrl: '/templates/toppingsNew.html',
  controller: 'ToppingsNewController as toppingsNew'
})
.state('toppingsShow', {
  url: '/toppings/:id',
  templateUrl: '/templates/toppingsShow.html',
  controller: 'ToppingsShowController as toppingsShow'
})
.state('toppingsEdit', {
  url: '/toppings/:id/edit',
  templateUrl: '/templates/toppingsEdit.html',
  controller: 'ToppingsEditController as toppingsEdit'
})
.state('home', {
    url: '/',
    templateUrl: '/templates/home.html'
    // controller: 'HomeController as home'
  })
.state('login', {
  url: '/login',
  templateUrl: '/templates/login.html',
  controller: 'LoginController as login'
})
.state('register', {
  url: '/register',
  templateUrl: '/templates/register.html',
  controller: 'RegisterController as register'
});
  $urlRouterProvider.otherwise('/');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider .loginUrl = '/login';
  $authProvider.SignupUrl = '/register';
  $authProvider.tokenPrefix = '';
}
