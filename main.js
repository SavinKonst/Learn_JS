class Clock {
  constructor(name) {
    this.name = name;
  }

  render() {
    let date = new Date();
    let hours = date.getHours(),
      mins = date.getMinutes(),
      sec = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (sec < 10) sec = "0" + sec;

    let output = `${hours}:${mins}:${sec}`;
    console.clear();
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clockOne = new Clock("firstClock");
clockOne.start();
