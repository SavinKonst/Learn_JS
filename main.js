let user = {
  name: "Василий Иванович",
  age: 35,
};

let string = JSON.stringify(user);
let obj = JSON.parse(string);

console.log(obj);
