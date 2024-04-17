Function.prototype.defer = function (ms) {
  return function (a, b) {
    setTimeout(f, ms, a, b);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
