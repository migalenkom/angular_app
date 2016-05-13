App.controller('ShowController',function($scope, Post, $routeParams, AuthService){
  $scope.user = AuthService.currentUser();
  $scope.post = Post.get({id: $routeParams.id});
});
