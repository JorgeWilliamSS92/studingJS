/*
setTimeout => function in JavaScript that aloows you to schedule
              the execution of a function after an amount of time (milliseconds)
              Times are aproximate (varies based on the workload of the JavaScript runtime env.)
*/

function formatDate() {
  let currentDate = new Date();
  return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

function teste() {
  console.log(formatDate());

  setTimeout(() => {
    console.log(formatDate());
  }, 5000);
}
teste();

//using the clearTimeout to stop the execution
let timer;

function startTimer() {
  timer = setTimeout(() => {
    window.alert("Executado");
  }, 3000);
}

function stopTimer() {
  clearTimeout(timer);
}
