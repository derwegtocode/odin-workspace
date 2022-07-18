
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]')


const SELECTIONS = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
];

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[computerChoice];
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    });
});

let playerScore = 0;
let computerScore = 0;


function makeSelection(selection) {
    const computerSelection = computerPlay()
    const youreWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, youreWinner)

    if (youreWinner) {
        playerScore++
        }
    else if (computerWinner) {
        computerScore++
    }
    else {
        playerScore
        computerScore
    }
    
}


function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.name
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
    document.getElementById('result-score-player').innerHTML = playerScore
    document.getElementById('result-score-computer').innerHTML = computerScore
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}




/*
let computerScore = 0;
let playerScore = 0;

                
function playRound() {
    var computerSelection = computerPlay();
    var playerSelectionPrompted = prompt("Choose wisely...");
    var playerSelection = playerSelectionPrompted.toUpperCase();

    if (computerSelection == playerSelection) {
        console.log(computerSelection);
         return "It's a tie!"
    }
    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS" || computerSelection == "PAPER" && playerSelection == "ROCK" || computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        console.log(computerSelection);
        computerScore++;
        return ("You lose! " + computerSelection + " beats " + playerSelection + "!!");
    }
    else {
        console.log(computerSelection);
        playerScore++;
        return ("You win! " + playerSelection + " beats " + computerSelection + "!!");
    };
};
*/
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