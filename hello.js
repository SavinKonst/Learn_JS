function hello(name) {
  let phrase = `Hello, ${name}!`;

  say(phrase);
  count();
}

function say(phrase) {
  debugger;
  alert(`** ${phrase} **`);
}
function count() {
  for (let q = 0; q < 4; q++){
    console.log(q);
  }
}