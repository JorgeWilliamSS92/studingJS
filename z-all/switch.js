// SWITCH = can be a efficient replacement to many else if statements

let day = 4;
let msg;

switch (day) {
  case 1:
    msg = "Sunday";
    break;
  case 2:
    msg = "Monday";
    break;
  case 3:
    msg = "Tuesday";
    break;
  case 4:
    msg = "Wednesday";
    break;
  case 5:
    msg = "Thursday";
    break;
  case 6:
    msg = "Friday";
    break;
  case 7:
    msg = "Saturday";
    break;
  default:
    msg = `${day} is not a day.`;
}

console.log(msg);
