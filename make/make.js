function sum(a, b) {
    return a + b;
}

function make() {
    let current = [arguments[0]];
    function f(...arg) {
    if ( typeof arg[0] !== 'function') {
        current.push(...arg);
        return f;
    }
      return current.reduce(sum);
}
return f;
  };

