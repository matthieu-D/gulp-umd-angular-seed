define(['umdHelloModule','angular-mocks'],function(umdHelloModule){
    beforeEach(module(umdHelloModule.name));
    describe('it should test',function()
             {
                 it('sould be ok',function(){
                     expect('titi').toEqual('titi')


                 })
             })
})
