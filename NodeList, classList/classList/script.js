/*
ClassList ->  Element property in JavaScript used to interact 
              with an element's list of classes (CSS classes)
              Allows you to make reusable classes for many elements across your webpage.

add       ()
remove    ()
toggle    (remove if present, add if not)
replace   (oldClass, newClass)
contains  ()
*/

const myButtons = document.querySelectorAll("button");

myButtons.forEach((button) => {
  button.classList.add("enable");
});

myButtons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

myButtons.forEach((button) => {
  button.addEventListener("mouseleave", (event) => {
    event.target.classList.toggle("hover");
  });
});

myButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("select")) {
      event.target.classList.remove("select");
    } else {
      event.target.classList.add("select");
    }
  });
});
