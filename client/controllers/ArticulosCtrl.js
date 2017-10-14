angular.module('ArticulosCtrl', []).controller('ArticulosController', ['$rootScope', '$scope', '$state', '$localStorage', 'toastr', 'Clientes', 'Articulos', function($rootScope, $scope, $state, $localStorage, toastr, Clientes, Articulos) {

  $scope.dvds = [];
  $scope.electrodomesticos = [];
  $scope.libros = [];

  $scope.getDvds = function() {
    Articulos.getArticulosDvds().then(function(response) {

      angular.forEach(response.data, function(value) {
        $scope.dvds.push(value);
      });

    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
    });
  }


  $scope.getElectrodomesticos = function() {
    Articulos.getArticulosElectrodomesticos().then(function(response) {

      angular.forEach(response.data, function(value) {
        $scope.electrodomesticos.push(value);
      });

    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
    });
  }

  $scope.getLibros = function() {
    Articulos.getArticulosLibros().then(function(response) {

      angular.forEach(response.data, function(value) {
        $scope.libros.push(value);
      });

    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
    });
  }

}]);
