const img = document.getElementsByTagName("img")[0];
const button = document.getElementsByTagName("button")[0];

function call() {
  if (img.style.display === "none") {
    img.style.display = "flex";
    button.innerHTML = "Hide Image";
  } else {
    img.style.display = "none";
    button.innerHTML = "Show Image";
  }
}
