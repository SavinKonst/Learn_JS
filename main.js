// Объекты основы.
// 4. Методы объекта, this
// Task3. Call chain.
"use strict";

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // added "return this" to each method
  },
  down() {
    this.step--;
    return this; // LISA
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep();
