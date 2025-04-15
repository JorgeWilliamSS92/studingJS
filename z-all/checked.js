const checkBox = document.getElementById("checkBox");
const visaCheck = document.getElementById("visaCheck");
const masterCheck = document.getElementById("masterCheck");
const paypalCheck = document.getElementById("paypalCheck");
const submit = document.getElementById("submit");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

submit.onclick = function () {
  if (checkBox.checked) {
    message1.textContent = "You are subscribed!";
  } else {
    message1.textContent = "You are NOT subscribed!";
  }

  if (visaCheck.checked) {
    message2.textContent = "You`re paying with Visa.";
  } else if (masterCheck.checked) {
    message2.textContent = "You`re paying with MasterCard.";
  } else if (paypalCheck.checked) {
    message2.textContent = "You`re paying with Paypal.";
  } else {
    message2.textContent = "You DIDN'T choose a payment method!";
  }
};
