function sum(c) {
  return function (d) {
    return c + d;
  };
}

alert(sum(1)(2));
alert(sum(5)(-1));
