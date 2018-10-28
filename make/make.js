module.exports = function make(...arr) {
  const current = arr;
  function f(...arg) {
    if (typeof arg[0] !== 'function') {
      current.push(...arg);
      return f;
    }
    return current.reduce(arg[0]);
  }
  return f;
};
