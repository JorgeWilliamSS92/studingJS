const v = document.getElementById("number");
const celsiusToFahrenheit = document.getElementById("celsiusToFahrenheit");
const fahrenheitToCelsius = document.getElementById("fahrenheitToCelsius");
const select = document.getElementById("select");
let temp;

function convert() {
  if (celsiusToFahrenheit.checked) {
    temp = v.value * (9 / 5) + 32;
    select.textContent = `${temp.toFixed(1)} °F`;
    select.style.cssText = "color:black, fon-weight:100";
  } else if (fahrenheitToCelsius.checked) {
    temp = (v.value - 32) * (5 / 9);
    select.textContent = `${temp.toFixed(1)} °C`;
    select.style.cssText = "color:black, fon-weight:100";
  } else {
    select.textContent = "Select a unit";
    select.style.cssText = "color:red; font-weight:700";
  }
}
