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
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'projectsController as PC'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'resumeController as RC'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'bioController as BC'
      });
});
