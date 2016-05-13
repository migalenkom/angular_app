(function() {
  'use strict';

  angular
  .module('hometask7')
  .controller('ShowController', ShowController);
  /** @ngInject */
  function ShowController ($scope, Post, $routeParams, AuthService){
  $scope.user = AuthService.currentUser();
  $scope.post = Post.get({id: $routeParams.id});
}

})();