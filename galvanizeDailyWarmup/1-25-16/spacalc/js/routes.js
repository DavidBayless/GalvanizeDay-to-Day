app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: '',
      //   controller: ''
      // })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'mainController as main'
      })
      .when('/add/:numOne/:numTwo', {
        templateUrl: 'views/add.html',
        controller: 'addController as AC'
      })
      .when('/subtract/:numOne/:numTwo', {
        templateUrl: 'views/subtract.html',
        controller: 'subtractController as SC'
      })
      .when('/multiply/:numOne/:numTwo', {
        templateUrl: 'views/multiply.html',
        controller: 'multiplyController as MC'
      })
      .when('/divide/:numOne/:numTwo', {
        templateUrl: 'views/divide.html',
        controller: 'divideController as DC'
      });
    $locationProvider.html5Mode(true);
});
