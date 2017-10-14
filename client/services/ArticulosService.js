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
      return $http.get('/api/productos').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosElectrodomesticos: function() {
      return $http.get('/api/productos').then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
