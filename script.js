// script.js
let minutes = 25;
let seconds = 0;
let timer;

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          timer = null;
          alert('Pomodoro session complete!');
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById('minutes').innerText = minutes
    .toString()
    .padStart(2, '0');
  document.getElementById('seconds').innerText = seconds
    .toString()
    .padStart(2, '0');
}
