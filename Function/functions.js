/*
Function: A section of reusable code. 
Declare code once, use it whenever you want.
Call the funtion to ececute that code.
*/
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p = document.getElementsByClassName("p");
let names = window.prompt("Tell me your name:");
let age = window.prompt(`What's your age?`);

console.log(p);
if (names && age) {
  happy(names, age);
}

function happy(name, age) {
  p[0].style = "display:flex";
  p[1].style = "display:flex";
  p[2].style = "display:flex";
  p1.textContent = `Happy Birthday dear ${name}`;
  p2.textContent = `You are now ${age} year old!`;
}

/*
variable scope: where a variable is recognized and accessible (local e global).
you can't access a alocal variable in another local variable, also you can not name a variable twice at the same scope.
*/
let house1 = {
  //here i have a global variable
  color: "blue",
  door: "white",
  number: 85,
};

function me() {
  let house2 = {
    //here a local variable
    color: "white",
    door: "black",
    number: 68,
  };
  console.log("house 2:" + house2.color, "house3:" + house1.color);
}

function neibor() {
  let house3 = {
    //here also a local variable
    color: "green",
    door: "black",
    number: 91,
  };
  console.log("house3:" + house3.color);
}

me();
neibor();
