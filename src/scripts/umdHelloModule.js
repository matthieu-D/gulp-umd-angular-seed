define(['angular'],function(angular){
    console.log(angular)
  var umdHelloModule = angular.module('umdHelloModule',[]);
  umdHelloModule.controller('umdHelloCtrl',function($scope){
    $scope.sayHello = function(name){
        return 'hello'+name;
    }
  });
  return umdHelloModule;
})
