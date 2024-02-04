let salaries = {
    John: 100,
    Ann: "160",
    Pete: 130,
};

alert(sumSalaries(salaries));

function sumSalaries(obj) {
  let result = 0;

  for (key in obj) {
    result += +obj[key];
  }
  return result;
}
