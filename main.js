function checkAge(age){
  return (age > 18 ? true : confirm('pearents agree?'));
}
alert(checkAge(prompt('What age?')));