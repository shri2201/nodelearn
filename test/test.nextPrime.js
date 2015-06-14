var assert = require('assert');
console.log('Loading nextPrime');
var np = require('/Users/anurag/nodelearn/nextPrime');
//var asyncPrime = require('asyncPrime');

suite('nextPrime', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal(11, np.nextPrime(7));
  });

  test('Check asserts 17=17', function() {
    assert.equal(17, 17);
  });

  test('zero and one are not prime numbers', function() {
    assert.equal(2, np.nextPrime(0));
    assert.equal(2, np.nextPrime(1));
  });
});

suite('asyncPrime', function() {
  test('asyncPrime should return the next prime number', function(done) {
    np.asyncPrime(128, function(n) {
      assert.equal(131, n, 'Wrong number');
      done();
    });
  });
});