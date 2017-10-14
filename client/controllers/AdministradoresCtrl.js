angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', 'Administrador', 'Clientes', 'Articulos', '$localStorage','toastr', function($rootScope, $scope, $state, Administrador, Clientes, Articulos, $localStorage,toastr) {
  $scope.params = {};

  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los clientes.', 'Error');
  });

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.articulos = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
  });

  // Para todos
  $scope.dineroRecaudado = function() {
    $state.go('dineroRecaudado');
  }
  $scope.cantidadVentasClientePeriodo = function() {
    $state.go('cantidadVentasClientePeriodo');
  }
  $scope.promedioComprasClientePeriodo = function() {
    $state.go('promedioComprasClientePeriodo');
  }
  $scope.ventaProductoMesParticular = function() {
    $state.go('ventaProductoMesParticular');
  }



}]);
