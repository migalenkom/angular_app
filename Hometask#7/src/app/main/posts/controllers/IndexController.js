(function() {
  'use strict';

  angular
  .module('hometask7')
  .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController ($scope, Post, AuthService){
    $scope.user = AuthService.currentUser();
    $scope.posts = Post.query();
  }

})();