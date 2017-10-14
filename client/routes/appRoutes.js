angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  }).state('crearclientes', {
    parent: 'home',
    views: {
      'crud@home': {
        templateUrl: 'views/crud/crear_clientes.html',
        controller: 'CRUDClientesController'
      }
    }
  }).state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'AccessController'
  }).state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'AccessController'
  }).state('libros', {
    url: '/libros',
    templateUrl: 'views/libros.html',
    controller: 'ArticulosController'
  }).state('electrodomesticos', {
    url: '/electrodomesticos',
    templateUrl: 'views/electrodomesticos.html',
    controller: 'ArticulosController'
  }).state('dvds', {
    url: '/dvds',
    templateUrl: 'views/dvds.html',
    controller: 'ArticulosController'
  }).state('carrito', {
    url: '/carrito',
    templateUrl: 'views/carrito.html',
    controller: 'ArticulosController'
  });

  $stateProvider.state('administradores', {
    url: '/administradores',
    templateUrl: 'views/administradores.html',
    controller: 'AdministradoresController'

  }).state('ventasportiendaperiodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/ventasportiendaperiodo.html',
        controller: 'AdministradoresController'
      }
    }
  });

  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
}]);
