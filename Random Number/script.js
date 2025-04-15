const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const label6 = document.getElementById("label6");
let randomNumber;
const max = 60;
const min = 1;

myButton.onclick = function () {
  randomNumber = Math.floor(Math.random() * max);
  label1.textContent = randomNumber;

  randomNumber = Math.floor(Math.random() * max);
  label2.textContent = randomNumber;

  randomNumber = Math.floor(Math.random() * max);
  label3.textContent = randomNumber;

  randomNumber = Math.floor(Math.random() * max);
  label4.textContent = randomNumber;

  randomNumber = Math.floor(Math.random() * max);
  label5.textContent = randomNumber;

  randomNumber = Math.floor(Math.random() * max);
  label6.textContent = randomNumber;
};
