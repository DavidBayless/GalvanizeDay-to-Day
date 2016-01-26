app.controller('mainController', ['$scope', mainController]);

function mainController($scope) {
  var vm = this;
  vm.pageTitle = "Angular Custom Filters";
  // $scope.active = 'home';
}

app.controller('secondController', ['$scope', secondController]);

function secondController($scope) {
  var vm = this;
  vm.pageTitle = "THE USS CHESHIRE";
}

app.controller('projectsController', ['$scope', projectsController]);

function projectsController($scope) {
  var vm = this;
  vm.pageTitle = "Stuff about stuff I've done";
  // vm.active = 'projects';
}

app.controller('bioController', ['$scope', bioController]);

function bioController($scope) {
  var vm = this;
  vm.pageTitle = "Stuff about me";
  // vm.active = 'bio';
}

app.controller('resumeController', ['$scope', resumeController]);

function resumeController($scope) {
  var vm = this;
  vm.pageTitle = "Stuff about why you should hire me";
  // vm.active = 'resume'
}

app.controller('indexController', ['$scope', '$location', indexController]);

function indexController($scope, $location) {
  var vm = this;
  console.log($location.$$path);
  vm.path = $location.$$path;
  vm.changePath = function() {
    vm.path = $location.$$path;
  }
  vm.pageTitle = "Stuff about why you should hire me";

  // vm.active = 'resume'
}
