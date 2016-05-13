App.controller('NewController',function($scope, Post, $routeParams, $location, AuthService){
  
 $scope.user = AuthService.currentUser();
  
 $scope.save = function() {
    Post.save({title: $scope.title, content: $scope.content, status: 'publish'}, function(){
      $location.path("/");
    });
  }
});
