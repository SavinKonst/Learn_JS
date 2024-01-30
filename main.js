function ask(quastion, yes, no){
  if(confirm(quastion)) yes();
  else no();
}
ask('do you agree?', ()=>alert('you are agree'), ()=>alert('you canceled'));