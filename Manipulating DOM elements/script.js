/*
Manipulating elements in the DOM

1. Creating a new element
2. Adding attributes to an element
3. Appending an element to the DOM
4. Removing an element from the DOM
*/

// 1. Creating a new element
const body = document.getElementsByTagName("body")[0];
const vegetables = document.createElement("div");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const fruts = body.firstElementChild;
const h2 = document.createElement("h2");
const h2_2 = document.createElement("h2");
const h1 = document.createElement("h1");

//body
body.prepend(h1);
h1.innerText = "My grocery list";

// 2. Adding attributes to an element
// 3. Appending an element to the DOM
//fruts
fruts.appendChild(li2);
li2.innerText = "apple";
li2.id = "apple2";
fruts.prepend(h2);
h2.innerText = "fruts";

//vegetables
fruts.after(vegetables);
vegetables.prepend(h2_2);
h2_2.innerText = "vegetables";
vegetables.id = "vegetables";
vegetables.appendChild(li);
vegetables.appendChild(li3);
vegetables.appendChild(li4);
li.innerText = "potato";
li3.innerText = "carrot";
li4.innerText = "cabbage";
li.id = "potato";
li3.id = "carrot";
li4.id = "cabbage";

// 4. Removing an element from the DOM
const footer = document.getElementsByClassName("footer")[0];
footer.remove();

//moving the element
const listfruts = document.querySelectorAll("#fruts li");
console.log(listfruts);
// const apple = document.getElementById("apple");
// const orange = document.getElementById("orange");
fruts.insertBefore(listfruts[3], listfruts[0]);
// apple.lastChild(after(orange));

//this list can not be move 'cause it doesn't exist at the DOM in real time.
const listVegetables = document.querySelectorAll("#vegetables li");

vegetables.insertBefore(listVegetables[2], listVegetables[1]);
console.log(listVegetables);
