var app = angular.module("calculator", []);
app.controller('calculatorController', function($scope) {
  var vm = this;

  vm.screen = "";
  vm.stored = "0";
  vm.operator = "+";

  vm.sqrt = function(screen) {
    if (screen) {
      return Math.sqrt(Number(screen)).toString();
    } else {
      return screen;
    }
  }

  vm.operate = function(screen, stored) {
    // var storeArray = stored.split(',');
    var num = math(Number(stored), Number(screen), vm.operator, vm.equal);
    return num;
  };

  vm.decimal = function(screen) {
    console.log(screen.indexOf(".") !== -1);
    if (screen.indexOf(".") !== -1) {
      return screen;
    } else {
      return screen + ".";
    }
  };

  vm.negative = function(screen) {
    if (screen.charAt(0) === "-") {
      screen = screen.slice(1);
    } else {
      screen = "-" + screen;
    }
    return screen;
  };

  function math(numOne, numTwo, operator, equal) {
    var retNum;
    if (equal) {
      vm.stored = "0";
    }
    if (operator === "+" || !operator) {
      retNum = numOne + numTwo;
      console.log(numOne + " " + operator + " " + numTwo);
    } else if (operator === "-") {
      retNum = numOne - numTwo;
      console.log(numOne + " " + operator + " " + numTwo);
    } else if (operator === "/") {
      retNum = numOne / numTwo;
      console.log(numOne + " " + operator + " " + numTwo);
    } else if (operator === "*") {
      retNum = numOne * numTwo;
      console.log(numOne + " " + operator + " " + numTwo);
    } else if (operator === "^") {
      retNum = Math.pow(numOne, numTwo);
      console.log(numOne + " " + operator + " " + numTwo);
    }
    return retNum.toString();
  }

});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.fire').volume=1.0;
  document.querySelector('.jazz').volume=0.1;
});
