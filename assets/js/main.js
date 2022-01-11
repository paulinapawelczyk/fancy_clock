// clock consts
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

//text block consts
const textHours = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const textSeconds = document.getElementById('text-seconds');
const textZone = document.getElementById('text-zone');
const dateDay = document.getElementById('text-day');
const dateMonth = document.getElementById('text-month');
const dateYear = document.getElementById('text-year');

// Text block changes
const textDate = () => {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let zone = date.getTimezoneOffset() / -60;
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (hh < 10) {
    textHours.innerText = `0${hh}:`;
  } else {
    textHours.innerText = `${hh}:`;
  }

  if (mm < 10) {
    textMinutes.innerText = `0${mm}:`;
  } else {
    textMinutes.innerText = `${mm}:`;
  }

  if (ss < 10) {
    textSeconds.innerText = `0${ss}`;
  } else {
    textSeconds.innerText = `${ss}`;
  }

  if (Math.sign(zone) === -1) {
    textZone.innerText = `UTC ${zone}`;
  } else {
    textZone.innerText = `UTC +${zone}`;
  }

  dateDay.innerText = day;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec',
  ];

  dateMonth.innerText = `${months[month]}`;
  dateYear.innerText = year;
};

setInterval(textDate, 1000); //launch clock function each 1s
