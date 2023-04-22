function getComputerChoice()    {
    let rndInt = Math.floor(Math.random() * 3) + 1
    if (rndInt == 1)    {
        return "rock";
    }
    else if (rndInt == 2)   {
        return "paper";
    }

    else if (rndInt == 3) {
        return "scissors";
    }
}

function getPlayerSelection() {
    let playerSelection = prompt("Please enter your choice from rock paper and scissors: ");
    playerSelection = playerSelection.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    if (choices.includes(playerSelection)) {
        return playerSelection;
    }
    else{
        return getPlayerSelection();
    }
    
}

// let playerChoice = getPlayerSelection();
// let computerChoice = getComputerChoice();

function gameRound(playerChoice, computerChoice)  {
    if (playerChoice == 'rock')  {
        if (computerChoice == 'scissors') {
            // return("You win. Rock beats Scissors");
            return true;
        }

        else if (computerChoice == 'rock') {
            // return("Draw! You both select rock");
            return ("Draw");
        }

        else    {
            // return("You lose. LMAO NOOB. Paper beats Rock");
            return false;
        }
    }

    else if (playerChoice == 'scissors')  {
        if (computerChoice == 'scissors') {
            // return("Draw! You both select Scissors");
            return ("Draw");
        }

        else if (computerChoice == 'rock') {
            // return("You lose. LMAO NOOB. Rock beats Scissors");
            return false;
        }

        else    {
            // return("You win. Scissors beats Paper");
            return true;
        }
    }

    else if (playerChoice == 'paper')  {
        if (computerChoice == 'scissors') {
            // return("You lose. LMAO NOOB. Scissors beats Paper");
            return false;
        }

        else if (computerChoice == 'rock') {
            // return("You win. Paper beats Rock");
            return true;
        }

        else    {
            // return("Draw. You both select Paper");
            return ("Draw");
        }
    }
}

// window.alert(gameRound(playerChoice, computerChoice));

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let draw = 0;
    for (let index = 0; index < 5; index++) {
        let playerChoice = getPlayerSelection();
        let computerChoice = getComputerChoice();
        let result = gameRound(playerChoice, computerChoice);
        // window.alert(index);
        if (result == true) {
            playerWin++;
            
        }
        else if (result == false) {
            computerWin++;
           
        }

        else    {
            draw++;
            
        }
        
    }

    if (playerWin > computerWin) {
        return("You are pro. You won");
    }

    else if (computerWin > playerWin) {
        return("LMAO n00b!!!! You lost.");
    }

    else    {
        return("Well played!!! The game is draw");
    }
}

window.alert(game());