let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// ciclePrintList(list);
recursivePrintList(list);

function ciclePrintList(list) {
  let copy = list,
    i = 1;

  while (copy.next != null) {
    i++;
    copy = copy.next;
  }

  copy = list;

  for (; i != 0; i--) {
    for (let j = 1; j < i; j++) {
      copy = copy.next;
    }
    alert(copy.value);
    copy = list;
  }
}

function recursivePrintList(list) {

  if (list.next != null) recursivePrintList(list.next);
  else {
    alert(list.value);
    
  }
}