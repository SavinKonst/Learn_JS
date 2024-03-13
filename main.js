let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(topSalary(salaries));

function topSalary(salaries) {
  let max = 0,
    result = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      max = salary;
      result = name;
    }
  }

  return result;
}
