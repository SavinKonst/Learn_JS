let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

showObject(menu);

multiplyNumeric(menu);

showObject(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == Number) obj[key] *= 2;
  }
}

function showObject(obj) {
  let message = "";

  for (let key in menu) {
    message += ("${key}" + " : " + "${menu[key]}\n");
  }

  alert(message);
}
