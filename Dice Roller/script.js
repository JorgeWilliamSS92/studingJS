// let dices = [];
const numbers = document.getElementById("numbers");
const button = document.getElementById("button");
const img = document.getElementById("img");
const numberofDice = document.getElementById("numberofDice");

button.addEventListener("click", function () {
  const array1 = [];
  const imgs = [];

  for (let i = 0; i < numberofDice.value; i++) {
    const v = Math.floor(Math.random() * 6) + 1;
    array1.push(v);
    imgs.push(`<img src="./dices/Dice-${v}.png" alt="Dice ${v}">`);
  }

  img.innerHTML = imgs.join("");
  numbers.textContent = `dices: ${array1.join(", ")}`;
});

/*
button.addEventListener("click", function () {
  let n = document.getElementById("n").value;
  if (n < 7 && n > 0) {
    if (n == 1) {
      dices.push(1);
      img.innerHTML += '<img src="./dices/Dice-1.png" alt="" />';
    } else if (n == 2) {
      dices.push(2);
      img.innerHTML += '<img src="./dices/Dice-2.png" alt="" />';
    } else if (n == 3) {
      dices.push(3);
      img.innerHTML += '<img src="./dices/Dice-3.png" alt="" />';
    } else if (n == 4) {
      dices.push(4);
      img.innerHTML += '<img src="./dices/Dice-4.png" alt="" />';
    } else if (n == 5) {
      dices.push(5);
      img.innerHTML += '<img src="./dices/Dice-5.png" alt="" />';
    } else {
      dices.push(6);
      img.innerHTML += '<img src="./dices/Dice-6.png" alt="" />';
    }

    numbers.textContent = `dices: ${dices}`;
  } else {
    n.value = "";
    window.alert(
      "The number of dice is INVALID, please make sure the number stands between 1 to 6."
    );
  }
});
*/
