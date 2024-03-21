alert(factorial(1)); // 1
alert(factorial(2)); // 2
alert(factorial(3)); // 6
alert(factorial(4)); // 24
alert(factorial(5)); // 120

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

// you can do this, but the recursion will add one step

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
