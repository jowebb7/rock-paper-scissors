
let maxAttempts = 5;
let computerChoice;
let playerInput;
let gameCount = [];

function game(){
function choice() {
    playerInput = prompt("Rock, Paper, or Scissors?");
    if(playerInput.toLowerCase() === "rock"  || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissors") {
        return playerInput;
    
    } else {
     alert("try again");
        if(--maxAttempts > 0) {
         choice()
         }
    }
}

function computerSelection() {
   let randomNum = Math.floor(Math.random() * 1000);

    if (randomNum < 333) {
        computerChoice = 'rock';
      } else if (randomNum > 666) {
        computerChoice = 'paper';
        } else computerChoice = 'scissors';
    
        return computerChoice;
}

function rockPaperScissors(comp,player){
    console.log("Player Choice =", player, "||||", "Computer Choice =", comp);

    if (comp.length === player.length){
        gameCount.push('tie');
    } else if (player.length - comp.length === 3 || player.length - comp.length === -4 || player.length - comp.length === 1){
        gameCount.push('Player Wins');
    } else gameCount.push('Computer Wins');
    
    console.log(gameCount);
    return gameCount;
}
rockPaperScissors(computerSelection(),choice());
}

for (let i = 0; i < 5; i++){
    game();
}