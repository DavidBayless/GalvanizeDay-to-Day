app.controller('addController', ['$scope', '$routeParams', addController]);

function addController($scope, $routeParams) {
  var vm = this;

  vm.total = Number($routeParams.numOne) + Number($routeParams.numTwo);
  vm.centerConsole = $routeParams.numOne + ' Plus ' + $routeParams.numTwo + ' Equals ' + vm.total;
}

app.controller('subtractController', ['$scope', '$routeParams', subtractController]);

function subtractController($scope, $routeParams) {
  var vm = this;

  vm.total = Number($routeParams.numOne) - Number($routeParams.numTwo);
  vm.centerConsole = $routeParams.numOne + ' Minus ' + $routeParams.numTwo + ' Equals ' + vm.total;
}

app.controller('multiplyController', ['$scope', '$routeParams', multiplyController]);

function multiplyController($scope, $routeParams) {
  var vm = this;

  vm.total = Number($routeParams.numOne) * Number($routeParams.numTwo);
  vm.centerConsole = $routeParams.numOne + ' Multiplied By ' + $routeParams.numTwo + ' Equals ' + vm.total;
}

app.controller('divideController', ['$scope', '$routeParams', divideController]);

function divideController($scope, $routeParams) {
  var vm = this;

  vm.total = Number($routeParams.numOne) / Number($routeParams.numTwo);
  vm.centerConsole = $routeParams.numOne + ' Divided By ' + $routeParams.numTwo + ' Equals ' + vm.total;
}

app.controller('mainController', ['$scope', mainController]);

function mainController($scope) {
  var vm = this;

  vm.first = 0;
  vm.operand = 'add';
  vm.second = 0;
}
