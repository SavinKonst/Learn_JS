alert(getSecondsToday()); // == 36000 (3600 * 10)

function getSecondsToday() {
  let date = new Date(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();
  return ss + mm * 60 + hh * 3600;
}
