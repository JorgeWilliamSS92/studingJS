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
    let fn = new Function(`return ${display.textContent}`);
    //eval(display.textContent); this may be dangerous
    //eval is dangerous because it can execute arbitrary code, which can lead to security vulnerabilities
    //For example, if a user inputs "alert('Hacked!')", eval will execute that code
    display.textContent = fn();
    history.textContent = calculationHistory;
  } catch (err) {
    display.textContent = "Error";
  }
}
