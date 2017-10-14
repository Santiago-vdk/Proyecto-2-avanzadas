angular.module('ArticulosCtrl', []).controller('ArticulosController', ['$rootScope', '$scope', '$state', '$localStorage', '$sessionStorage', 'toastr', 'Clientes', 'Articulos', function($rootScope, $scope, $state, $localStorage, $sessionStorage, toastr, Clientes, Articulos) {

  $scope.dvds = [];
  $scope.electrodomesticos = [];
  $scope.libros = [];
  $scope.carrito = [];

  $scope.cargarCarrito = function() {
    angular.forEach($sessionStorage.carrito, function(value) {
      $scope.carrito.push(value);
    });
  }

  $scope.agregarArticulo = function(articulo) {
        articulo.cantidad = 1;
    $sessionStorage.carrito.push(articulo);
  }

  $scope.realizarCompra = function(articulo) {

    $sessionStorage.carrito.push(articulo);

  }

  $scope.actualizarCantidad = function(id, cantidad) {

    $sessionStorage.carrito.map((articulo) => {

      if(articulo.id == id){

        articulo.cantidad = cantidad;
      }

    });
  }

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
