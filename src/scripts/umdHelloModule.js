define(['angular'],function(angular){
  var umdHelloModule = angular.module('umdHelloModule',[]);
  umdHelloModule.controller('umdHelloCtrl',function(){
      this.message ='hello';
  });
  return umdHelloModule;
})
