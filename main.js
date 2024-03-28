function makeCounter() {
  let count = 0;
  counter.set = function (num) {
    return (count = num);
  };

  return function () {
    return count++;
  };
  // ... ваш код ...
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10
debugger;

counter.decrease(); // уменьшить значение счётчика на 1

alert(counter()); // 10 (вместо 11)
