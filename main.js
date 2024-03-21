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

ciclePrintList(list);
recursivePrintList(list);

function ciclePrintList(list) {
  let copy = list;

  while (copy) {
    alert(copy.value);
    copy = copy.next;
  }
}

function recursivePrintList(list) {
  alert(list.value);
  if (list.next != null) recursivePrintList(list.next);
}
