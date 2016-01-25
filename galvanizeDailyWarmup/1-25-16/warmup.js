var app = angular.module('WarmupApp', []);
app.controller('WarmupController', function($scope) {
  var vm = this;

  vm.todo = '';
  vm.todolist = [{item: 'Buy Groceries', startTime: new Date()}];
  vm.doingList = [];
  vm.doneList = [];

  vm.addItem = function(item) {
    var itemObj = {};
    itemObj.item = item;
    itemObj.startTime = new Date();
    console.log(itemObj);
    vm.todolist.push(itemObj);
    itemObj = {};
  };

  vm.moveDoing = function(item) {
    vm.todolist.splice(vm.todolist.indexOf(item), 1);
    vm.doingList.push(item);
  };

  vm.moveDone = function(item) {
    vm.doingList.splice(vm.doingList.indexOf(item), 1);
    item.finishTime = new Date();
    item.timeDiff = item.finishTime - item.startTime;
    item.totalTime = calculateTime(item);
    vm.doneList.push(item);
  };

  vm.removetodo = function(item) {
    vm.todolist.splice(vm.todolist.indexOf(item), 1);
  };

  vm.removedoing = function(item) {
    vm.doingList.splice(vm.doingList.indexOf(item), 1);
  };

  vm.removedone = function(item) {
    vm.doneList.splice(vm.doneList.indexOf(item), 1);
  };

  function calculateTime(item) {
    var value = '';
    var placeVal = 0;
    var placeDec = 0;
    if (item.timeDiff < 60000) {
      value = Math.round((item.timeDiff/1000)*100)/100 + ' second(s)';
    } else if (item.timeDiff < 3600000) {
      value = Math.floor(item.timeDiff/60000) + ' minute(s)';
    } else if (item.timeDiff < 3600000) {
      value = Math.floor(item.timeDiff/360000) + ' hour(s)';
    } else if (item.timeDiff > 8640000) {
      value = Math.floor(item.timeDiff/8640000) + ' day(s)';
    } else if (item.timeDiff > 3153600000) {
      value = Math.floor(item.timeDiff/3153600000) + ' year(s)';
    }
    return value;
  }

});
