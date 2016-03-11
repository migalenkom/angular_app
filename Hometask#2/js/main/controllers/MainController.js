App.controller('MainController',function($scope, toaster) {
  $scope.pop = function(){
      toaster.pop('success', "title", "text");
  };

  $scope.people = [];

  $scope.insert = function(human){
  	
  	$scope.people.push(human);
  	toaster.pop('success', "", "User was added successfully");

  };
  
  $scope.delete = function(index){
  		
  	$scope.people.splice(index, 1);
  	toaster.pop('info', "", "User was deleted successfully");  
  
  };

});