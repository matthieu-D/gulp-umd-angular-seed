define(['angular'],function(angular){
  var helloModule = angular.module('helloModule',[]);
  helloModule.controller('HelloCtrl',function(){
      this.message ='hello';
  });
  return helloModule;
})
