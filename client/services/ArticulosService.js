angular.module('ArticulosService', []).factory('Articulos', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getArticulos: function() {
      return $http.get('/api/productos').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosDvds: function() {
      return $http.get('/api/productos').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosLibros: function() {
      return $http.get('/api/libros').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosElectrodomesticos: function() {
      return $http.get('/api/electrodomesticos').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    eliminarArticulo: function(articulo) {
      return $http.delete('/api/productos/' + articulo.id).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    actualizarArticulo: function(articulo) {
      return $http.put('/api/productos/' + articulo.id, articulo).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    agregarArticulo: function(articulo) {
      return $http.post('/api/productos/', articulo).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
