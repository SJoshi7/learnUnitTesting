const assert = require('chai').assert;
const sayLearning = require('../app.js').sayLearning;
const addNumbers = require('../app.js').addNumbers;

//creating test
describe('App',function(){
  //description of test
  it('sayLearning should return: Learn Testing',()=>{
    let result = sayLearning();
    assert.equal(result,'Learn Testing');
  });

  it('sayLearning should return type string',()=>{
    let result = sayLearning();
    assert.typeOf(result,'string');
  });

  it('addNumbers should be above 5 for given data',function(){
    let result = addNumbers(5,5);
    assert.isAbove(result,5);
  });

  it('addNumbers should return type Number',()=>{
    let result = addNumbers(5,5);
    assert.typeOf(result,'number');
  });
});
