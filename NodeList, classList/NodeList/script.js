/*
NodeList =  Static collection of HTML elements by (id, class, element)
            Can be creating by using querySelectorAll()
            Similar to an Array, but no (map, filter, reduce)
            NodeList won't update to automatically reflect changes
*/
let buttons = document.querySelectorAll(".buttons");
console.log(buttons);

//using for each in all nodeList
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "rgb(0, 89, 255, 95%)";
  });
});

//applying the eventListner in nodeList
buttons.forEach((button) => {
  button.textContent += "😀";
});

//mouseOver and mouseOut event listener
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    button.style.backgroundColor = "rgb(0, 89, 255, 65%)";
    //event.target.style.backgroundColor = 'green'
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseleave", (event) => {
    button.style.backgroundColor = "rgb(0, 89, 255, 60%)";
    //event.target.style.backgroundColor = 'rgb(0, 89, 255, 60%)'
  });
});

//add an new element
const newButton = document.createElement("button");
newButton.textContent = "Button 5 😀";
newButton.classList = "buttons";

const body = document.getElementsByTagName("body")[0].appendChild(newButton);

//remove an element
buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    //button.remove();
  });
});
