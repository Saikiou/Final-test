"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let totalScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayAnimation = function (anime, backgroundColor, width) {
  document.querySelector("body").style.animation = anime;
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".number").style.width = width;
};

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("no number");
  } else if (guess === secretNumber) {
    displayMessage("🎉Congratulation !!!");
    document.querySelector(".number").textContent = secretNumber;
    displayAnimation("blinkingWin 0.5s ", "#60b347", "30rem");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
    // totalScore += highScore;
    // document.querySelector('.totalScore').textContent = totalScore;
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🔥Too high!" : "⛄Too low!");
      score--;
      document.querySelector(".score").textContent = score;
      displayAnimation("blinkingWrong 0.5s ", "#ffba08");
    } else {
      displayMessage("😢You lost!");
      document.querySelector(".score").textContent = 0;
      displayAnimation("blinkingLose 0.5s", "#ef0a1a");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  console.log(secretNumber);
});
