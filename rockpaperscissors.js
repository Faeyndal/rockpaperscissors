// Rock Paper Scissors game

//Create a variable for the computer to play the game
let computerChoice = "blank";
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

getComputerChoice();

console.log(computerChoice);