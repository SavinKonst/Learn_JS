const num = 1000,
  iterations = 100000;

// 1. The first solution using a loop
function iterativeSumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// 2. Second solution via recursion
function recursiveSumTo(n) {
  if (n == 1) return n;
  return n + recursiveSumTo(n - 1);
}

// 3. The third solution using the arithmetic progression formula n*(n+1)/2
function gaussSumTo(n) {
  return (n * (n + 1)) / 2;
}

// Measuring Function Execution Time
function bench(f) {
  let start = Date.now();
  for (let i = 0; i < iterations; i++) f(num);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
let time3 = 0;

// bench(iterativeSumTo), bench(recursiveSumTo) и bench(gaussSumTo) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
  time1 += bench(iterativeSumTo);
  time2 += bench(recursiveSumTo);
  time3 += bench(gaussSumTo);
}

alert("Итоговое время iterativeSumTo: " + time1);
alert("Итоговое время recursiveSumTo: " + time2);
alert("Итоговое время gaussSumTo: " + time3);

