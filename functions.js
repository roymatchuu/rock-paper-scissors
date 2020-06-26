// global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
let computerSelection = null;

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
        playerScore++;
        return `You win! ${player} beats ${comp}`;
    }
    else if(comp > player) 
    {
        computerScore++;
        return `You lose! ${comp} beats ${player}`;
        
    }
    else 
    {
        return "Tie Game!";
    }
}

// function game() 
// {
//     while(true){
//         let playerSelection = prompt("Enter one of the following:\n1 for rock\n2 for paper\n3 for scissors");

//         if(playerSelection === null){ break; }

//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }

//     console.log("Game Over!");
// }

function game(){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');
    
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
        
        console.log('----------------------------------------------')
        if(computerScore == 5 || playerScore == 5)
        {
            console.log('We have a winner');
            let x = (playerScore == 5) ? "Player wins!" : "Computer Wins :(";
            console.log(x);
            playerScore = 0; 
            computerScore = 0;
            return;
        }


        computerSelection = computerPlay();
        playerSelection = button.id;
        // alert(button.id);
        // console.log(button.id)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score is now:\nPlayer: ${playerScore} AI: ${computerScore}`);
        });
    });
}


game();

