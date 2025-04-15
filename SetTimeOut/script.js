const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const p = document.getElementById("p");

buttonOne.addEventListener("click", () => {
  let i = 1;
  const interval = setInterval(() => {
    if (i <= 15) {
      if (i == 1) {
        p.innerHTML = `0${i} second`;
      } else if (i < 10) {
        p.innerHTML = `0${i} seconds`;
      } else {
        p.innerHTML = `${i} seconds`;
      }
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
