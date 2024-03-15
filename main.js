let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

function getDateAgo(base, days) {

  return (new Date(+base - days*1000*60*60*24).getDate());
}