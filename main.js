let date = new Date(2012, 0, 3); // 3 января 2012 года

let dotw = {
  0: "ВС",
  1: "ПН",
  2: "ВТ",
  3: "СР",
  4: "ЧТ",
  5: "ПТ",
  6: "СБ",
};
alert(getWeekDay(date)); // нужно вывести "ВТ"

function getWeekDay(date) {
  return dotw[date.getDay()];
}
