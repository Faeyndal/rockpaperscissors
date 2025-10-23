// Rock Paper Scissors game

//Create a variable for the computer to play the game
let computerChoice = "blank";
//Create a variable for the player
let humanChoice = "blank";
//Create variables for score keeping
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const round = document.querySelector(".round");

//Function for the computer's choice of option
function getComputerChoice () {
    //Create a variable to store a random number between 1-3
    let randomChoiceNumber = (Math.floor(Math.random() * 3) + 1);
    
    //Change the number to a rock/paper/scissors option
    if (randomChoiceNumber === 1) {
        computerChoice = "rock";
    } else if (randomChoiceNumber === 2) {
        computerChoice = "paper";
    } else if (randomChoiceNumber === 3) {
        computerChoice = "scissors";
    } else {
        computerChoice = "error";
    }
    
    return computerChoice;
}


function playRound (humanChoice, computerChoice) {
        //check who wins the round
    if (humanChoice === "rock" && computerChoice === "paper") {
        round.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        round.textContent = "You lose! Scissors beats Paper!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        round.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        round.textContent = "You win! Paper beats Rock!";
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        round.textContent = "You win! Scissors beats Paper!";
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        round.textContent = "You win! Rock beats Scissors!";
        humanScore++;
    } else {
        round.textContent = "It's a tie!";
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
        if (humanScore === 5) {
            score.textContent = "You win!";
            buttons.forEach((button) => button.remove());
        } else if (computerScore === 5) {
            score.textContent = "The computer wins!";
            buttons.forEach((button) => button.remove());
        } else {
            score.textContent = "Player Score : " + humanScore + " Computer Score : " + computerScore;
        }
    });
});