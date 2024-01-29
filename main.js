function checkAge(age){
  return (age > 18 ? true : confirm('?'));
}
alert(checkAge(prompt('What age?')));