  /*function Clock({ template }) {

    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.clear();
      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }
*/
class Clock {
  constructor({template}) {
     let timer;
    
     function render() {
       let date = new Date();
    
       let hours = date.getHours();
       if (hours < 10) hours = '0' + hours;
    
       let mins = date.getMinutes();
       if (mins < 10) mins = '0' + mins;
    
       let secs = date.getSeconds();
       if (secs < 10) secs = '0' + secs;
    
       let output = template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);
    
//       console.clear();
       console.log(output);
     }
    
     this.stop = function() {
       clearInterval(timer);
     };
    
     this.start = function() {
       render();
       timer = setInterval(render, 1000);
     };
  }
}


  let clock = new Clock({ template: 'clock1 - h:m:s' });
  clock.start();
  
  
  function newClock(){
      let clock2 = new Clock({ template: 'h:m:s' });
      clock2.start();
  }
  
  setTimeout(newClock, 5000);