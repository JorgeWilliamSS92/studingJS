const imgList = [
  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const img = document.getElementsByClassName("container__img")[0];
const buttonLeft = document.getElementsByClassName("container__left")[0];
const buttonRight = document.getElementsByClassName("container__right")[0];
let b = 0;

buttonLeft.addEventListener("click", () => {
  if (b != 0) {
    b -= 1;
    img.src = imgList[b];
  }
});
buttonRight.addEventListener("click", () => {
  b += 1;
  if (b <= imgList.length - 1) {
    img.src = imgList[b];
  } else {
    b -= 1;
  }
});
