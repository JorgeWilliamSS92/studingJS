let bodyWidth = window.innerWidth / 10 - 8;
let bodyHeight = window.innerHeight / 10 - 8;
// const body = document.querySelector("body");
// body.style.width = `${bodyWidth}rem`;
// body.style.height = `${bodyHeight}rem`;

const div = document.getElementById("div");
const moveAmount = 2;
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

    if (x > bodyWidth) {
      x = bodyWidth;
    }
    if (y > bodyHeight) {
      y = bodyHeight;
    }
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }

    div.style.transform = `translate(${x}rem, ${y}rem)`;
    div.style.transform = `translate(${x}rem,${y}rem)`;
    console.log(`x: ${x}, y: ${y}`);
  }
});
