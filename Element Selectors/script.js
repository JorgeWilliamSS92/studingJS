/*
Element selectors ->  Methods used to target and manipulate HTML elements
                      They allow you to select one or multiple HTML elements
                      from the DOM (Document Object Model) and perform actions on them
                      such as changing their content, style, or attributes.
                      The most common methods are:

1. document.getElementById()    -> ELEMENT OR NULL
2. document.getElementsByClassName() -> HTMLCollection
3. document.getElementsByTagName()  -> HTMLCollection
4. document.querySelector()   -> FIRST ELEMENT OR NULL
5. document.querySelectorAll() -> NodeList
6. document.createElement()   -> ELEMENT
*/

// 1. document.getElementById() -> ELEMENT OR NULL
const id = document.getElementById("h1");
id.style.backgroundColor = "yellow";

// 2. document.getElementsByClassName() -> HTMLCollection
const person = document.getElementsByClassName("person");
person[0].style.fontWeight = 100;
person[0].style.color = "red";
for (let p of person) {
  p.style.color = "blue";
}

Array.from(person).forEach((p) => {
  p.style.fontSize = "5rem";
});

// 3. document.getElementsByTagName() -> HTMLCollection
const ul = document.getElementsByTagName("ul");
console.log(ul);

ul[0].style.backgroundColor = "gray";
ul[0].style.color = "white";

const title = document.getElementsByTagName("title");
title[0].textContent = "Selectors in JavaScript";
console.log(title);

// 4. document.querySelector() -> FIRST ELEMENT OR NULL
const firstLi = document.querySelector("li");
firstLi.style.backgroundColor = "green";

// 5. document.querySelectorAll() -> NodeList
const allLi = document.querySelectorAll("li");
console.log(allLi);
allLi.forEach((li) => {
  li.style.listStyleType = "none";
});
allLi[2].style.listStyleType = "circle";

// 6. document.createElement() -> ELEMENT
const newH2 = document.createElement("h2");
newH2.textContent = "This is a new h2 element";

const body = document.querySelector("body");
body.appendChild(newH2);
newH2.style.color = "purple";
newH2.style.fontSize = "3rem";
newH2.style.fontWeight = 100;
