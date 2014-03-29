
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.helloUmd = factory();
  }
}(this, function(require, exports, module) {

return define(['angular'],function(angular){
  var helloModule = angular.module('helloModule',[]);
  helloModule.controller('HelloCtrl',function(){
      this.message ='hello';
  });
  return helloModule;
})
;

}));
