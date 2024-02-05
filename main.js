// Объекты основы. Копирование объектов и ссылки.
let menu = {
  sizes: {
    width: 200,
    height: 300,
  },
  title: "My menu",
};

let clone = Object.assign({}, menu);
console.log('oject name"clone"');
showObject(clone);
let secondClone = _.cloneDeep(menu);
console.log('oject name"secondClone"');
showObject(secondClone);


function showObject(obj) {
  let message = "";
  for (key in obj) {
message += key + " : " + obj[key] + "\n";
  }
  console.log(message);
}