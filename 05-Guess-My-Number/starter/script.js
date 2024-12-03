"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function setString(className, stringValue) {
  document.querySelector(className).textContent = stringValue;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    setString(".message", "⛔ No number!");
    // document.querySelector(".message").textContent = "⛔ No number!";
    // when player wins
  } else if (guess === secretNumber) {
    setString(".message", "🎯 Correct Number!");
    // document.querySelector(".message").textContent = "🎯 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setString(
        ".message",
        guess > secretNumber ? "📈 Too high!" : "📈 Too low!"
      );
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      setString(".message", "💥 You lost the game!");
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setString(".message", "Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
