const assert = require('chai').assert;
const sayLearning = require('../app.js').sayLearning;
const addNumbers = require('../app.js').addNumbers;

//Results
sayLearningResult = sayLearning();
addNumbersResult = addNumbers(5,5);

//creating test
describe('App',function(){
  //description of test
  describe('sayLearning()',function functionName() {
    it('sayLearning should return: Learn Testing',()=>{
      assert.equal(sayLearningResult,'Learn Testing');
    });

    it('sayLearning should return type string',()=>{
      assert.typeOf(sayLearningResult,'string');
    });
  });

  describe('addNumbers()',function(){
    it('addNumbers should be above 5 for given data',function(){
      assert.isAbove(addNumbersResult,5);
    });

    it('addNumbers should return type Number',()=>{
      assert.typeOf(addNumbersResult,'number');
    });
  });
});
