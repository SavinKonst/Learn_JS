function pow(x, n){
  let result = 1;
for (let i = 0; i < n; i++){
  result = result * x;
}
  return result;
}
let x = +prompt('enter x?', '');
let n = +prompt('enter n?', '');
if((n >= 1) && (n % 1 ==0)) {
alert('pow(x, n) = ' + pow(x, n));}
else alert('function supports only natural degrees');