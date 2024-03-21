function fib(n) {
  let a = 0,
    b = 1,
    c = 1;

  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = b + a;
  }
  return c;
}

alert(fib(1)); // 2
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
