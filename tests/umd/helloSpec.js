define(['umdHelloModule','angular-mocks'],function(umdHelloModule){
  var umdModuleCtrl;
  beforeEach(module('helloModule'));
  beforeEach(inject(function($controller){
    umdModuleCtrl = $controller('HelloCtrl');
  }));
  describe('it should test',function() {
    it('a simple RequireJSModule Controller',function(){
      expect(umdModuleCtrl.message).toEqual('hello');
    });
  });
});
