app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController as MC'
      })
      .when('/second', {
        templateUrl: 'views/second.html',
        controller: 'secondController as SC'
      })
});
