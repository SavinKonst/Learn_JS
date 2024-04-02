function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

function delay(func, time) {
  return function (...args) {
    let savedThis = this;
    function start() {
      func.apply(savedThis, args);
    }
    setTimeout(start, time);
  };
}
