App.controller('MainController',function($scope, $http, toaster){
  
  $scope.pop = function(){
      toaster.pop('success', "title", "text");
  };

  $scope.users = [];

  $scope.insert = function(user){
  	$scope.users.push(user);
  	toaster.pop('success', "", "User was added successfully");
  };
  
  $scope.delete = function(index){
  	$scope.users.splice(index, 1);
  	toaster.pop('info', "", "User was deleted successfully");  
  };

  $scope.sendData = function (){
	
	if ($scope.UserForm.$invalid){
		toaster.pop('error', "", "Check if input valid");
	} else {

		$http({
	        	method: "POST",
	        	url: "http://angular.codeforges.com",
	      		data: 
	      		{
			        firstName: $scope.firstName,
			        lastName: $scope.lastName,
			        userName: $scope.userName
	      		}
	      }).then(function (response, status){ 
	       
	       $scope.users.push(response.data.response);
	       toaster.pop('success', "", "User was added successfully");
	       
	       console.log(response.data.response,status)

	   });
  }
  };

  $http ({method: 'GET', url: 'http://angular.codeforges.com'}).then(function (response){ 

  	if ( response.data.error ) {
        toaster.pop('error', "", response.data.error);
      } else {
    	$scope.users = response.data
      }
  });
});
