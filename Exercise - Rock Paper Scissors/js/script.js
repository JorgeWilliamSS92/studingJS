const divPlayer = document.getElementById("playerChoose");
const divComputer = document.getElementById("computerChoose");
const divResult = document.getElementById("result");
const playerTotal = document.getElementById("playerTotal");
const computerTotal = document.getElementById("computerTotal");

function selected(choice) {
  const playerChoose = choice;
  let computerChoose = Math.floor(Math.random() * 3) + 1;

  divPlayer.lastChild.textContent = playerChoose;

  if (computerChoose === 1) {
    divComputer.lastChild.textContent = "Rock";
    computerChoose = "Rock";
  } else if (computerChoose === 2) {
    divComputer.lastChild.textContent = "Paper";
    computerChoose = "Paper";
  } else if (computerChoose === 3) {
    divComputer.lastChild.textContent = "Scissors";
    computerChoose = "Scissors";
  }

  result(playerChoose, computerChoose);
}

function result(playerChoose, computerChoose) {
  if (playerChoose === computerChoose) {
    divResult.textContent = "It's a tie!";
    divResult.style.color = "rgb(52,115,250)";
  } else if (
    (playerChoose === "Rock" && computerChoose === "Scissors") ||
    (playerChoose === "Paper" && computerChoose === "Rock") ||
    (playerChoose === "Scissors" && computerChoose === "Paper")
  ) {
    divResult.textContent = "You win!";
    divResult.style.color = "rgb(6,187,6)";
    playerTotal.textContent = parseInt(playerTotal.textContent) + 1;
  } else {
    divResult.textContent = "You lose!";
    divResult.style.color = "tomato";
    computerTotal.textContent = parseInt(computerTotal.textContent) + 1;
  }
}
