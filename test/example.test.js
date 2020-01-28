// IMPORT MODULES under test here:
import  { firstArrayFunction } from '..app.js'
import { products } from '..item.Array.js'

const test = QUnit.test;

test('first array', function(assert) {
    //Arrange
    const input = products
    const expected = 

    //Act 
    const result = firstArrayFunction (input)
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
