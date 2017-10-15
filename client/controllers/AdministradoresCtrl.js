angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', 'Administrador', 'Clientes', 'Articulos', '$localStorage', '$sessionStorage', 'toastr', function($rootScope, $scope, $state, Administrador, Clientes, Articulos, $localStorage, $sessionStorage, toastr) {
  $scope.params = {};
  $scope.catalogo = [];

  // Para todos
  $scope.modificarProductoCatalogo = function() {
    $state.go('modificarProductoCatalogo');
  }
  $scope.verProductosCatalogo = function() {
    $state.go('verProductosCatalogo');
  }
  $scope.promedioProductosClientes = function() {
    $state.go('promedioProductosClientes');
  }
  $scope.rangoProductosCompradosPorCliente = function() {
    $state.go('rangoProductosCompradosPorCliente');
  }
  $scope.topProductos = function() {
    $state.go('topProductos');
  }
  $scope.agregarProducto = function() {
    $state.go('agregarProducto');
  }

  $scope.cargarCatalogo = function() {
    Articulos.getArticulos().then(function(response) {
      angular.forEach(response.data, function(value) {
        $scope.catalogo.push(value);
      });

    }).catch(function(err) {
      alert("Error iniciando sesion");
    });
  }

  $scope.actualizarArticulo = function(articulo) {

    Articulos.actualizarArticulo(articulo).then(function(response) {
      toastr.success('Articulo actualizado exitosamente', 'Success');
      $state.reload();
    }).catch(function(err) {
      alert("Error actualizando");
    });


  }

  $scope.eliminarArticulo = function(articulo) {
    Articulos.eliminarArticulo(articulo).then(function(response) {
      toastr.success('Articulo eliminado exitosamente', 'Success');
      $state.reload();
    }).catch(function(err) {
      alert("Error eliminando");
    });
  }

  $scope.agregarArticulo = function(articulo) {
    Articulos.agregarArticulo(articulo).then(function(response) {
      toastr.success('Articulo agregado exitosamente', 'Success');
      $state.reload();
    }).catch(function(err) {
      alert("Error agregando");
    });
  }

}]);
