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

let playerChoice = getPlayerSelection();
let computerChoice = getComputerChoice();

function gameRound(playerChoice, computerChoice)  {
    if (playerChoice == 'rock')  {
        if (computerChoice == 'scissors') {
            return("You win. Rock beats Scissors");
        }

        else if (computerChoice == 'rock') {
            return("Draw! You both select rock");
        }

        else    {
            return("You lose. LMAO NOOB. Paper beats Rock");
        }
    }

    else if (playerChoice == 'scissors')  {
        if (computerChoice == 'scissors') {
            return("Draw! You both select Scissors");
        }

        else if (computerChoice == 'rock') {
            return("You lose. LMAO NOOB. Rock beats Scissors");
        }

        else    {
            return("You win. Scissors beats Paper");
        }
    }

    else if (playerChoice == 'paper')  {
        if (computerChoice == 'scissors') {
            return("You lose. LMAO NOOB. Scissors beats Paper");
        }

        else if (computerChoice == 'rock') {
            return("You win. Paper beats Rock");
        }

        else    {
            return("Draw. You both select Paper");
        }
    }
}

window.alert(gameRound(playerChoice, computerChoice));