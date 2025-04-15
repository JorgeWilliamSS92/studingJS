/* let email;

document.getElementById("mySubmit").onclick = function () {
  email = document.getElementById("text").value;

  if ((email === "jorge_william92@hotmail.com") & (email != "")) {
    document.getElementById("h1").textContent = `Welcome, ${email}`;
    document.getElementById("h1").style = "font-size: 1.5rem";
    document.getElementById("div").style = "display:none";
    // window.alert(email); window.prompt(email)
  } 
  else {
    document.getElementById("pError").textContent = "Try again..";
  }
};
*/

/*
let age = window.prompt("What is your age:");
age = Number(age) + 1;
console.log(age, typeof age);
*/

const PI = 3.14159;
let radio;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radio = document.getElementById("number").value;
  let n = document.getElementById("number");

  if (radio != "") {
    n.style = "border-color: green";
    document.getElementById("result").textContent = 2 * PI * radio;
    document.getElementById("error").style = "display:none";
  } else {
    n.placeholder = "Digite um número válido.";
    n.style = "border-color: red";
  }
};
