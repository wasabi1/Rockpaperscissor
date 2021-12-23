
const items = ['rock', 'paper', 'scissors']; //defining the selections to be randomized

// function to get computer section
function computerPlay() {
    
    const result = (items[Math.floor(Math.random()*items.length)]);
    return result;
}


// function to play one round of the game 

function game() {
    let i = 0;
    const playerTally = [];
    const computerTally = [];
    console.log (playerTally, computerTally);
    do {
        i += 1;
        

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                    console.log("tie");
                    computerTally.push(1); //add 1 to the computer score
                    playerTally.push(1); //add 1 to the player score

                }else if (playerSelection == "rock" && computerSelection == "paper") {
                    result = console.log( "computer wins");
                    computerTally.push(1);
                
                }else if (playerSelection == "scissor" && computerSelection == "rock") {
                    result = console.log( "computer wins");
                    computerTally.push(1);
        
                }else if (playerSelection == "paper" && computerSelection == "scissor") {
                    result = console.log("computer wins");
                    computerTally.push(1);

                }else if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                    console.log("You Win! " + `${playerSelection}` + " beats " + `${computerSelection}`);
                    playerTally.push(1);
                }else {
                    console.log("no real entry detected")
                }
            return
            }
       
    const computerSelection = computerPlay(items);
    //console.log(computerSelection);
    const playerSelection = prompt("type your selection", "rock, paper, scissors").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));   
    } while (i < 5);

    //findong the length of each players score and storing that in their respective variable
    //to be used later as their official score
    const playerScore = playerTally.length;
    const computerScore = computerTally.length;
    

    if (playerScore < computerScore) {
        console.log("player " +  playerScore + " computer " + computerScore + ". Computer Wins");
    }else {
        console.log("player " +  playerScore + " computer " + computerScore + ". Player Wins");
    }
    return
}
console.log(game());

    


    

