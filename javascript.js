const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".rpsButton");
const playerScore = document.querySelector(".pScore");
const cpuScore = document.querySelector(".cScore");
const info = document.querySelector(".infoBox");
const instructions = info.querySelector(".gameInfo");
const resetGame = document.querySelector(".reset");
let cpuPoints = 0;
let playerPoints = 0;
let start = true;

function chooseRock() {
  game(1);
}
function choosePaper() {
  game(2);
}
function chooseScissors() {
  game(3);
}

function mouseOver() {
  this.classList.add("active");
}

function mouseOff() {
  this.classList.remove("active");
}

function game(playerChoice) {
  let computer = Math.round(Math.random() * 1000);
  if (playerPoints >= 5 || cpuPoints >= 5) {
    return;
  }
  if (computer <= 333) {
    computer = 1;
  } else if (computer >= 664) {
    computer = 3;
  } else {
    computer = 2;
  }
  if (playerChoice === computer) {
    let instruction = "Tie. Please try again.";
    instructions.textContent = instruction;
  } else if (
    (playerChoice == 1 && computer == 3) ||
    (playerChoice == 2 && computer == 1) ||
    (playerChoice == 3 && computer == 2)
  ) {
    playerPoints++;
    console.log("player wins", playerPoints);
    playerScore.textContent = playerPoints;
    let instruction = "";
    instructions.textContent = instruction;
  } else {
    cpuPoints++;
    console.log("computer wins", cpuPoints);
    cpuScore.textContent = cpuPoints;
    let instruction = "";
    instructions.textContent = instruction;
  }
  if (cpuPoints >= 5 || playerPoints >= 5) {
    let instruction = "Game Over. Please reset and try again.";
    instructions.textContent = instruction;
  }
}

function reset() {
  cpuPoints = 0;
  playerPoints = 0;
  playerScore.textContent = playerPoints;
  cpuScore.textContent = cpuPoints;
  let instruction = "";
  instructions.textContent = instruction;
}

function highlight() {
  this.classList.add("highlight");
}
function unhighlight() {
  this.classList.remove("highlight");
}

playerScore.textContent = playerPoints;
cpuScore.textContent = cpuPoints;

rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);
buttons.forEach((button) => button.addEventListener("mouseover", mouseOver));
buttons.forEach((button) => button.addEventListener("mouseleave", mouseOff));
buttons.forEach((button) => button.addEventListener("mousedown", highlight));
buttons.forEach((button) => button.addEventListener("mouseup", unhighlight));
resetGame.addEventListener("click", reset);
