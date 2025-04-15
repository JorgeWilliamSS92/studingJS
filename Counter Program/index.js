const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const label = document.getElementById("labelValue");

let v = 0;

decreaseBtn.onclick = function () {
  v--;
  label.textContent = v;
};

resetBtn.onclick = function () {
  v = 0;
  label.textContent = v;
};

increaseBtn.onclick = function () {
  v++;
  label.textContent = v;
};

// console.log("The value of PI is: " + Math.PI);
const x = 150.54;
const y = 10.335;
const z = -250.5;

let d = x;
d = Math.floor(x);
d = Math.ceil(x);
d = Math.min(x, y, z);
d = Math.max(z, y, x);
d = Math.random(z);
d = Math.abs(z);
d = Math.sign(z);
// console.log(d);
