// Объекты основы.
// 5. Констпруктор, оператор new
// Task2. Создайте калькулятор при помощи конструктора, new Calculator.

//"use strict";

function Calculator() {

  this.read = function() {
    this.a = +prompt( "Enter a:", 0 );
    this.b = +prompt( "Enter b:", 0 );
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );