(function() {
  'use strict';

  angular
    .module('hometask7')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    
  $locationProvider.html5Mode({enabled: true, requireBase : false});

  $routeProvider
  .when('/login', {
    templateUrl: '/app/main/login/partials/login.html',
    controller: 'LoginController'
  })
  .when('/logout', {
    templateUrl: '/app/main/login/partials/login.html',
    controller: 'LoginController',
    resolve: {
      logout: function($location, AuthService){
        AuthService.logout();
        $location.path("/login");
      }
    }
  })
  .when('/', {
    templateUrl: '/app/main/posts/partials/index.html',
    controller: 'IndexController'
  })
   .when('/posts/new', {
    templateUrl: '/app/main/posts/partials/form.html',
    controller: 'NewController'
  })
  .when('/posts/:id', {
    templateUrl: '/app/main/posts/partials/show.html',
    controller: 'ShowController'
  })
  .when('/posts/:id/edit', {
    templateUrl: '/app/main/posts/partials/form.html',
    controller: 'EditController'
  })
  .otherwise('/');
}

})();
