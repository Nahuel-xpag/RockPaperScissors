let choices = ["rock", "paper", "scissors"]
function getComputerChoice(){

    return choices[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) { 
    if(playerSelection === null) {
        return "You canceled"
    }
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        
        return "You Lose! Paper beats Rock"
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        youWin = true;
        return "You Win!"
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
       
        return "You Lose! Scissors beat Paper"
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        
        return "You Win!"
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
       
        return "You Win!"
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        
        return "You Lose! Rock beats Paper"
    }else if (playerSelection === computerSelection) {
        return "It's a Tie!"
    }else {return "Enter a valid option"}
}
function game() {
let userScore = 0;
let pcScore = 0;
while (userScore < 3 && pcScore < 3) {

    let playerSelection = prompt();
    let result = playRound(playerSelection, getComputerChoice());

    if (result === "You Win!") {
        userScore++;
    } else if (result.includes("Lose")) {
        pcScore++;
    }

    console.log(result)
    console.log("Your Score:" + userScore)
    console.log("PC Score:" + pcScore)
    };


 if (userScore === 3) {
    console.log("You are the Champion!")
 }else if (pcScore === 3){
    console.log("PC wins")
 }
}
console.log(game())


