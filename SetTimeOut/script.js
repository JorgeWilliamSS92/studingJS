const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const p = document.getElementById("p");
const span = document.getElementById("span");

let interval;

buttonOne.addEventListener("click", () => {
  let i = 1;
  interval = setInterval(() => {
    if (i <= 15) {
      if (i == 1) {
        p.innerHTML = `0${i} <span id="span">second</span>`;
      } else if (i < 10) {
        p.innerHTML = `0${i} <span id="span">seconds</span>`;
      } else {
        p.innerHTML = `${i} <span id="span">seconds</span>`;
      }
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

buttonTwo.addEventListener("click", () => {
  clearInterval(interval);
  p.innerHTML = `0 <span id="span">seconds</span>`;
  alert("Timer stopped");
});
