const start = document.getElementById("start");
const stopTime = document.getElementById("stop");
const reset = document.getElementById("reset");
const timeDisplay = document.getElementById("display");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let runningTime;
let isRunning = false;

start.addEventListener("click", startTimer);
stopTime.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  start.disabled = true;
  runningTime = setInterval(() => {
    milliseconds++;

    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    timeDisplay.innerHTML = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
      milliseconds
    ).padStart(2, "0")}`;
  }, 10);
}

function stopTimer() {
  start.disabled = false;
  clearInterval(runningTime);
}
function resetTimer() {
  start.disabled = false;
  clearInterval(runningTime);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.innerHTML = "00:00:00:00";
}
