App.controller('MainController',function($scope, toaster) {
  $scope.pop = function(){
      toaster.pop('success', "title", "text");
  };
});