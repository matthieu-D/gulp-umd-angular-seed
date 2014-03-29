define(['umdHelloModule','angular-mocks'],function(umdHelloModule){
  var appRequireJSModuleCtrl;
  beforeEach(module(umdHelloModule.name));
  beforeEach(inject(function($controller) {
    appRequireJSModuleCtrl = $controller('umdHelloCtrl');
  }));
  describe('it should test',function() {
    it('a simple RequireJSModule Controller',function() {
      expect(appRequireJSModuleCtrl.message).toEqual('hello');
    });
  });
})
