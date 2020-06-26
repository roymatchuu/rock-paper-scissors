// global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
let computerSelection = null;

const container = document.querySelector("#container");

function computerPlay()
{
    return Math.floor(((Math.random() * 1000)%3) + 1);
}

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection;
    let comp = computerSelection;

    let arr_win_cases =  [
        "Rock beats Scissors", // 1 < 3 
        "Paper beats Rock", // 2 > 1 
        "Scissors beat Paper" // 3 > 2
    ];

    let move_str = ["Rock","Paper", "Scissors"]

    if(player == 1 && comp == 3)
    {
        playerScore++;
        return `You win! ${arr_win_cases[0]}`;
    }
    else if(comp == 1 && player == 3){
        computerScore++;
        return `You lose! ${arr_win_cases[0]}`;
    }
    else if(player > comp)
    {
        playerScore++;
        return `You win! ${arr_win_cases[3-player]}`;
    }
    else if(comp > player) 
    {
        computerScore++;
        return `You lose! ${arr_win_cases[3-comp]}`;
        
    }
    else 
    {
        return `Tie Round! Player and AI both chose ${move_str[player-1]}`;
    }
}

function show_progress(rounds, statement){
    
    if(document.getElementById("resultstext") && document.getElementById("scoreboard")){
        container.removeChild(document.getElementById("resultstext"));
        container.removeChild(document.getElementById("scoreboard"));
    }

    if(document.getElementById("winnertext")){
        container.removeChild(document.getElementById("winnertext"));
    }

    let output = document.createElement('h1'); 
    output.setAttribute("id", "resultstext")
    output.textContent = `Round ${rounds} results: \n${statement}`;

    let score = document.createElement('h2'); 
    score.setAttribute("id", "scoreboard")
    score.textContent = `Player: ${playerScore} AI: ${computerScore}`;

    container.appendChild(output);
    container.appendChild(score);
}

function show_winner(txt)
{
    const winner = document.createElement('h1');
    winner.setAttribute("id", "winnertext")
    winner.style.textAlign = "center";
    winner.style.fontWeight = "bold";
    winner.textContent = txt;

    container.appendChild(winner);
}

function game(){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');
    let rounds = 0;
    let x = null;
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
        rounds++;
        computerSelection = computerPlay();
        playerSelection = button.id;

        console.log(`Round ${rounds} results`);
        console.log(`Player selected ${playerSelection} and AI selected ${computerSelection}`);
        
        let playRound_str = playRound(playerSelection, computerSelection)
        console.log(playRound_str);

        console.log(`Score is now:\nPlayer: ${playerScore} AI: ${computerScore}`);
        console.log('----------------------------------------------')
        
        show_progress(rounds, playRound_str);

        if(rounds >= 5)
        {
            if(playerScore == computerScore){
                x = "It was draw!"
            }
            else {
                console.log('We have a winner');
                x = (playerScore > computerScore) ? "Player wins!" : "Computer Wins :(";
            }


            console.log(x);
            playerScore = 0; 
            computerScore = 0;
            rounds = 0;
            show_winner(x);
            return;
        }
        });
    });
}

game();

