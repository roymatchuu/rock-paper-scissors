function computerPlay()
{
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection;
    let comp = computerSelection;

    if(player > comp)
    {
        return "You win!"
    }
    else if(comp > player) 
    {
        return "You lose!"
    }
    else 
    {
        return "Tie Game!"
    }
}

function game() 
{
    while(true){
        let playerSelection = prompt("Enter one of the following:\n1 for rock\n2 for paper\n3 for scissors");

        if(playerSelection === null){ break; }

        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Game Over!");
}

game();

