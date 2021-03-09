'use strict';
// Var
let Author = document.querySelectorAll('.author');
Author.forEach((au) => (au.textContent = 'Rashed'));

// Ui variables
let [ms, ss, mm, hh] = [0, 0, 0, 0];

const displayTimer = document.querySelector('.stopwatch__Display');

let int = null;
const startTime = document.querySelector('.stopwatch__startTime');
const pauseTime = document.querySelector('.stopwatch__pauseTime');
const resetTime = document.querySelector('.stopwatch__resetTime');

startTime.addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTime, 10);
});

pauseTime.addEventListener('click', () => {
  clearInterval(int);
});

resetTime.addEventListener('click', () => {
  clearInterval(int);
  [ms, ss, mm, hh] = [0, 0, 0, 0];
  displayTimer.innerHTML = '00 : 00 : 00 : 000';
});

function displayTime() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    ss++;
    if (ss === 60) {
      ss = 0;
      mm++;
      if (mm === 60) {
        mm = 0;
        hh++;
      }
    }
  }

  let H = hh < 10 ? '0' + hh : hh;
  let M = mm < 10 ? '0' + mm : mm;
  let S = ss < 10 ? '0' + ss : ss;
  let MS = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;
  displayTimer.innerHTML = `${H} : ${M} : ${S} : ${MS}`;
}
