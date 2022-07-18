var options = ["ROCK", "PAPER", "SCISSORS"];

        function computerPlay() {
            let choice = Math.floor(Math.random() * options.length);
            return options[choice];
        }

               
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