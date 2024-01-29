function checkAge(age){
  return ((age > 18) || confirm('pearents agree?'));
}
alert(checkAge(prompt('What age?')));