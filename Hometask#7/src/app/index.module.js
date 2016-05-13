(function() {
  'use strict';

  angular
    .module('hometask7', ['ngResource', 'ngRoute', 'base64'])
    .filter('sanitize', function($sce) { return $sce.trustAsHtml; });

})();
