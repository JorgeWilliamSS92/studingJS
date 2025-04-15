/*
Method Chaining: calling one method after another in one continous line of code.
*/

//NO METHOD CHAINING
let name = window.prompt("Whats you'r name: ");

let firsLatter = name.trim();
firsLatter = firsLatter.charAt(0);
firsLatter = firsLatter.toUpperCase();

let charts = name.trim();
charts = charts.slice(1);
charts = charts.toLowerCase();
console.log(firsLatter + charts);

//METHOD CHAINIG ACTIVE
let all =
  name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
console.log(all);
