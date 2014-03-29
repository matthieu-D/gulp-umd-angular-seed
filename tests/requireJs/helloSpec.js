define(['requireJsHelloModule','angular-mocks'],function(requireJsHelloModule){
  var appRequireJSModuleCtrl;
  beforeEach(module(requireJsHelloModule.name));
  beforeEach(inject(function($controller) {
    appRequireJSModuleCtrl = $controller('HelloCtrl');
  }));
  describe('it should test',function() {
    it('a simple RequireJSModule Controller',function() {
      expect(appRequireJSModuleCtrl.message).toEqual('hello');
    });
  });
})
