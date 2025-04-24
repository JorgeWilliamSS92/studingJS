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

/*
DOM Navigation -> The process of navigating through the structure of an HTML
document using JavaScript.

.firstElementChild -> Returns the first child element of a parent element
.lastElementChild  -> Returns the last child element of a parent element
.previousElementSibling -> Returns the previous sibling element of a parent element
.nextElementSibling -> Returns the next sibling element of a parent element
.parentElement -> Returns the parent element of a child element
.children -> Returns a collection of child elements of a parent element
*/

//.firstElementChild
const parentElement = document.getElementsByTagName("ul")[0];
const firstChild = parentElement.firstElementChild;
firstChild.style.fontSize = "5rem";

//.lastElementChild
const parentElement2 = document.getElementsByTagName("ul")[1];
const lastChild = parentElement2.lastElementChild;
lastChild.style.fontSize = "5rem";

//.previousElementSibling
const previousSibling = lastChild.previousElementSibling;
previousSibling.style.backgroundColor = "red";
previousSibling.style.color = "white";

//.nextElementSibling
const nextSibling = firstChild.nextElementSibling;
nextSibling.style.backgroundColor = "blue";
nextSibling.style.color = "white";

//.parentElement
const parentElement3 = lastChild.parentElement;
parentElement3.style.backgroundColor = "black";
parentElement3.style.color = "white";

//.children
const children = parentElement.children;
console.log(children);
Array.from(children).forEach((c) => {
  c.style.fontFamily = "Arial";
  c.style.textDecoration = "dotted underline";
});
