App.controller('IndexController',function($scope, Post, AuthService){
  $scope.user = AuthService.currentUser();
  $scope.posts = Post.query();
});
