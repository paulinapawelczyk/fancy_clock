const hour = document.getElementById('clock-hour');
const minutes = document.getElementById('clock-minutes');
const seconds = document.getElementById('clock-seconds');

// Rotating movement
const clock = () => {
  let date = new Date();

  // clock equal, to get degree of arrows
  let hh = date.getHours() * 30; // 360 / 12
  let mm = date.getMinutes() * 6; // 360 / 60
  let ss = date.getSeconds() * 6; // 360 / 60

  // add styling
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000); //launch clock function each 1s
