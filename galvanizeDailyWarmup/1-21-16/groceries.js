var app = angular.module("GroceryApp", []);
app.controller("GroceryController", function($scope) {
  var vm = this;


  vm.food = "";
  vm.number = "";
  vm.foodArray = [{foodname: 'Apples', quantity: 3, checked: false}];
  vm.foodObject = {};

  vm.addFood = function(foodObj) {
    foodObj.checked = false;
    vm.foodArray.push(foodObj);
    foodObj = {};
  };

  vm.removeFood = function(food) {
    vm.foodArray.splice(vm.foodArray.indexOf(food), 1);
  };
});
