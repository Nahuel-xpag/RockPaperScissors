//functions
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
        outcomeContainer.appendChild(rVP);
        cpuScore++;
        //score.appendChild(cpuPoints)
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        outcomeContainer.appendChild(userWin);
        userScore++
        //score.appendChild(userPoints)
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        outcomeContainer.appendChild(sVP);
        cpuScore++;
        //score.appendChild(cpuPoints);
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        outcomeContainer.appendChild(userWin);
        userScore++;
        //score.appendChild(userPoints)
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        outcomeContainer.appendChild(userWin);
        userScore++;
        //score.appendChild(userPoints)
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        outcomeContainer.appendChild(pVR)
        cpuScore++;
        
    }else if (playerSelection === computerSelection) {
        outcomeContainer.appendChild(tie)
    }else {return "Enter a valid option"}
}

function handleChange(){
    if (userScore === 5){
        score.textContent = "You are the champion!"
        userScore = 0;
        cpuScore = 0;
    }else if (cpuScore === 5) {
        score.textContent = "Cpu wins :("
        userScore = 0;
        cpuScore = 0;
    }else{
        score.textContent = `
        You: ${userScore}
        PC: ${cpuScore}
      `
    }
  
}

const outcomeContainer = document.querySelector('#outcome');
//outcome variables
const userWin = document.createElement('h2');
userWin.textContent = 'You Win!';
const tie = document.createElement('h2');
tie.textContent = "It's a tie!";

const sVP = document.createElement('h2');
sVP.textContent = "You Lose! scissors beat paper";

const pVR = document.createElement('h2');
pVR.textContent = "You Lose! Rock beats Paper"

const rVP = document.createElement('h2');
rVP.textContent = "You lose! Paper beats Rock";


const btns = document.querySelectorAll('button');

//score
let userScore = 0;
let cpuScore = 0;

const score = document.querySelector('#score')
btns.forEach(btn => btn.addEventListener('click', () => playRound(btn.classList.value, getComputerChoice())));
btns.forEach(btn => btn.addEventListener('click', () => handleChange()));

