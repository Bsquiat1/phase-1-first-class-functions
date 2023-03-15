function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      throw new Error('Argument must be a function');
    }
  }
  function returnsANamedFunction() {
    function namedFunction() {
      console.log('Hello, world!');
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Hello, world!');
    }
  }
  