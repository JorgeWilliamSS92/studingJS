//Getting the information from the HTML
const display = document.getElementById("display");
const history = document.getElementById("history");

function selected(value) {
  display.textContent += value;
  console.log(value);
}
function clearContent() {
  display.textContent = " ";
}
function result() {
  let calculationHistory = display.textContent;
  try {
    if (display.textContent === "" || display.textContent === "Error") {
      display.textContent = "Error";
      return;
    }
    display.textContent = eval(display.textContent);
    history.textContent = calculationHistory;
  } catch (err) {
    display.textContent = "Error";
  }
}
