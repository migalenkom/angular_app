(function() {
  'use strict';

  angular
    .module('hometask7')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location, AuthService) {
    $log.debug('runBlock end');
     $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      AuthService.fetchUser();
      if (!AuthService.isLoggedIn()) 
        $location.path("/login");
    });
  }

})();
