// Объекты основы.
// 5. Констпруктор, оператор new
// Task3. Создайте new Accumulator

//"use strict";

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter new value:", 0);
  };
};

let accumulator = new Accumulator(5);

alert(accumulator.value);

accumulator.read();
accumulator.read();

alert(accumulator.value);