var app = angular.module('ValidApp', []);

app.controller('ValidController', function($scope) {
  var vm = this;

  vm.validate = function(valObj) {
    console.log(valObj);
    console.log();
  };

});
