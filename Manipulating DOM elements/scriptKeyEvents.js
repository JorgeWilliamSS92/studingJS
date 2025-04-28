const div = document.getElementById("div");
const moveAmount = 1;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    div.textContent = "😡";
    div.style.backgroundColor = "tomato";
  }
});

document.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    div.textContent = "😀";
    div.style.backgroundColor = "#0a81e2";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); // Prevent default scrolling behavior

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    div.style.left = `${x}rem`;
    div.style.top = `${y}rem`;
  }
});
