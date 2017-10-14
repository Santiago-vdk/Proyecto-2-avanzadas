angular.module('AccessCtrl', []).controller('AccessController', ['$rootScope', '$scope', '$state', '$localStorage', 'toastr', 'Clientes', function($rootScope, $scope, $state, $localStorage, toastr, Clientes) {

  $scope.register = function(cliente) {

    Clientes.register(cliente).then(function(response) {
      toastr.success('Se ha registrado exitosamente', 'Success');
       $location.path('/');
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
    });
  }

  $scope.login = function(cliente) {

    Clientes.login(cliente).then(function(response) {
      toastr.success('Se ha registrado exitosamente', 'Success');
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
    });
  }

}]);
