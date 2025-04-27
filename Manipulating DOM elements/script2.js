const container = document.getElementsByClassName("container")[0];
const p = document.getElementsByClassName("p")[0];

container.addEventListener("click", function () {
  p.textContent = `OUCH! 😡`;
  container.style.backgroundColor = "var(--red)";
});

container.addEventListener("mouseover", function () {
  p.textContent = "Don't do it! 😟";
  container.style.backgroundColor = "var(--yellow)";
});

container.addEventListener("mouseout", function () {
  p.textContent = "Click me to change 😀";
  container.style.backgroundColor = "var(--green)";
});
