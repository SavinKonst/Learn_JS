let schedule = {};

alert("The schedule is empty? " + isEmpty(schedule));
alert("Edding property schedule[8:30] = Wake up");

schedule["8:30"] = "Wake up";

alert("The schedule is empty? " + isEmpty(schedule));


// Returns "true" if an Object have any properties
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}
