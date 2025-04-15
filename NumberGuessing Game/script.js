//Guessing number game
document.addEventListener("DOMContentLoaded", function () {
  const results = document.getElementById("results");
  const min = 1;
  const max = 100;
  const answer = Math.floor(Math.random() * (max - min) + 1) - 1;

  let running = true;
  let guess;
  let attempts = 0;

  while (running) {
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if (guess < min || guess > max) {
      window.alert(`The number have to be between ${min} - ${max}`);
    } else if (isNaN(guess)) {
      window.alert("You need to input a number.");
    } else {
      attempts++;
      if (guess < answer) {
        window.alert("TOO LOW, try again!");
      } else if (guess > answer) {
        window.alert(`TOO HEIGHT, try again!`);
      } else {
        results.textContent = `Congratulations, the answer is ${answer} - N. attempts: ${attempts}`;
        // window.alert(
        //   `Congratudations, you guess right at ${attempts} attempts`
        // );
        running = false;
      }
    }
  }
});
