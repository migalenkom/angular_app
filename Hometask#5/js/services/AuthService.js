App.factory( 'AuthService', function($window) {
  var currentUser;

  return {
  	fetchUser: function(){
  	  if ($window.sessionStorage.user) {
  	    currentUser = JSON.parse($window.sessionStorage.user);
  	  }
  	},
    login: function(user) {
    currentUser = user.body
    $window.sessionStorage.setItem('user', JSON.stringify(user.body));
    },
    logout: function() {
	  currentUser = null
	  $window.sessionStorage.user = null;
    },
    isLoggedIn: function() {  
      return currentUser != null
    },
    currentUser: function() { 
      return currentUser; 
    }
  };
});