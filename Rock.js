
const items = ['rock', 'paper', 'scissors']; //defining the selections to be randomized

// function to get computer section
function computerPlay() {
    
    const result = (items[Math.floor(Math.random()*items.length)]);
    return result;
}


// function to play one round of the game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    
            console.log("tie");
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            result = console.log( "computer wins");
        
        }else if (playerSelection == "scissor" && computerSelection == "rock") {
            result = console.log( "computer wins");

        }else if (playerSelection == "paper" && computerSelection == "scissor") {
            result = console.log("computer wins");
        }else 
            console.log("You Win! " + `${playerSelection}` + " beats " + `${computerSelection}`);
    return
    }
    
    
    
    const computerSelection = computerPlay(items);
    console.log(computerSelection);
    const playerSelection = "rock"
    //console.log(computerSelection);// print result inside the console for verification
    console.log(playRound(playerSelection, computerSelection));
