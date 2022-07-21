const OPTIONS = ["rock", "paper", "scissors"];

let computerSelection

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * OPTIONS.length);
    computerSelection = OPTIONS[computerChoice]
    computerChoiceDisplay.textContent =  OPTIONS[computerChoice];
}



const userChoiceDisplay = document.querySelector('#yourChoice');
const computerChoiceDisplay = document.querySelector('#computersChoice');
const yourScore = document.querySelector('#yourScore');
const machineScore = document.querySelector('#computersScore');
const messageDiv = document.querySelector('#message');

function updateChoices() {
    userChoiceDisplay.textContent = playerSelection
    computerChoiceDisplay.textContent = computerSelection
}



let playerSelection;


const handleClick = (e) => {
    playerSelection = e.target.id
    userChoiceDisplay.textContent = playerSelection
    computerPlay();
    playRound()
}

for (let i = 0; i < OPTIONS.length; i++) {
    document.getElementById(OPTIONS[i]).addEventListener('click', handleClick)
}


function updateScores() {
    yourScore.textContent = "YOU: " + playerScore 
    machineScore.textContent = "THE MACHINE: " + computerScore
}

let computerScore = 0;
let playerScore = 0;
                
function playRound() {
    

    if (computerSelection == playerSelection) {
        console.log(computerSelection);
        updateScores();
        messageDiv.textContent = "It's a tie!"
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
        computerSelection === "paper" && playerSelection === "rock" || 
        computerSelection === "scissors" && playerSelection === "paper") {
        console.log(computerSelection);
        computerScore++;
        updateScores()
        messageDiv.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!!";
    }
    else {
        console.log(computerSelection);
        playerScore++;
        updateScores()
        messageDiv.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!!";
    };
    
 
};



/* 5 juegos */

/*

       function game() {
        for (let i = 0; i < 5; i++) {
            console.log(playRound());
            console.log("The scores so far are: Computer " + computerScore + " // Player: " + playerScore);
        }
        console.log("The final score is: Computer " + computerScore + " // Player: " + playerScore);
        if (computerScore > playerScore) {
            console.log("Computer wins! Better luck next time...");
        }
        else {
            console.log("Congratulations!! You win!!");
        }
       }

       console.log(game());
*/