const OPTIONS = ["rock", "paper", "scissors"];

let computerSelection

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * OPTIONS.length);
    computerSelection = computerChoice
    computerChoiceDisplay.textContent =  OPTIONS[computerChoice];
}

let computerScore = 0;
let playerScore = 0;

const userChoiceDisplay = document.createElement('p');
const computerChoiceDisplay = document.createElement('p');
const yourScore = document.createElement('p');
const machineScore = document.createElement('p');
const gameGrid = document.getElementById('games');
const scoreGrid = document.getElementById('points');
const messageForUser = document.createElement('p');
const messageDiv = document.getElementById('message');

messageDiv.append(messageForUser);

gameGrid.append(userChoiceDisplay, computerChoiceDisplay);
scoreGrid.append(yourScore, machineScore);

function updateChoices() {
    userChoiceDisplay.textContent = playerSelection
    computerChoiceDisplay.textContent = computerSelection
}



console.log(updateScores())

let playerSelection;

const handleClick = (e) => {
    playerSelection = e.target.id
    userChoiceDisplay.textContent = playerSelection
    computerPlay();
    
}

for (let i = 0; i < OPTIONS.length; i++) {
    document.getElementById(OPTIONS[i]).addEventListener('click', handleClick)
}




                
function playRound() {
   
    
    if (computerSelection == playerSelection) {
        console.log(computerSelection);
        updateScores()
        messageForUser.textContent = "It's a tie!"
    }
    else if (computerSelection == rock && playerSelection == "scissors" || 
        computerSelection == paper && playerSelection == "rock" || 
        computerSelection == scissors && playerSelection == "paper") {
        console.log(computerSelection);
        computerScore++;
        updateScores()
        messageForUser.textContent = ("You lose! " + computerSelection + " beats " + playerSelection + "!!");
    }
    else {
        console.log(computerSelection);
        playerScore++;
        updateScores()
        messageForUser.textContent = ("You win! " + playerSelection + " beats " + computerSelection + "!!");
    };
};

function updateScores() {
    yourScore.textContent = ('YOU: ' + playerScore)
    machineScore.textContent = ('THE MACHINE: ' + computerScore )
}

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