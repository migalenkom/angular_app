(function() {
  'use strict';
  angular
  .module('hometask7')
  .factory('Post', function($resource) {
  return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
  });
})();