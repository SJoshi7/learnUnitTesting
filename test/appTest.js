const assert = require('chai').assert;
const app = require('../app');

//creating test
describe('App',function(){
  //description of test
  it('App should return: Learn Testing',function(){
    assert.equal(app(),'Learn Testing');
  });
});
