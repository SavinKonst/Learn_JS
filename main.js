function printNumbersWithIntervals(from1, to1) {
  let start1 = from1;
  let intervalId1 = setInterval(() => {
    console.log('Intervals' + start1);
    start1++;
    if (start1 > to1) {
      clearInterval(intervalId1);
      console.log('Function with Intervals done!');
    }
  }, 1000);
};

function printNumbersWithRecursion(from, to){
  let start = from;
  
  setTimeout(function tick(){
    if(start > to){
      console.log('Function with recursion done!');
    } else {
      console.log('Recursion' + start);
      setTimeout(tick, 1000);
      start++;
    }
  }, 1000);
}

printNumbersWithIntervals(prompt('Enter from: ', 0), prompt('Enter to: ', 5));

printNumbersWithRecursion(prompt('Enter from: ', 0), prompt('Enter to: ', 5));