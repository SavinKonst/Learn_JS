alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let now = new Date(),
    diff = now - date;
  if (diff < 1000) {
    return "прямо сейчас";
  } else if (diff < 60000) {
    return `${Math.round(diff / 1000)} сек. назад`;
  } else if (diff < 3600000) {
    return `${Math.round(diff / 60000)} мин. назад`;
  } else
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date
      .getFullYear()
      .toString()
      .slice(-2)} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}
