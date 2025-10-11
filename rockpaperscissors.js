// Rock Paper Scissors game

//Create a variable for the computer to play the game
let computerChoice = "blank";
//Create a variable for the player
let humanChoice = "blank";
//Create variables for score keeping
let humanScore = 0;
let computerScore = 0;

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

//Function for the player's choice
function getHumanChoice () {
    let humanInput = prompt("Choose one : rock, paper, scissors", "");
    humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

function playGame() {
    
    //function for each round of the game
    function playRound (humanChoice, computerChoice) {
            //check who wins the round
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    for (let i=0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }
    
}

playGame();

if (humanScore > computerScore) {
    console.log("You win! ", humanScore, " to ", computerScore);
} else if (computerScore > humanScore) {
    console.log("You lost! ", humanScore, " to ", computerScore);
} else {
    console.log("It was a tie! ", humanScore, " to ", computerScore);
}