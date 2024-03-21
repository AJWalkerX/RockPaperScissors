function playGame(playerSelection, computerSelection){
    for(let i = 0; i < 5; i++){
        console.log (playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection){
   if(playerSelection === computerSelection){
    return "It's a tie";
   }
   //Lose options
   else if (computerSelection === "Rock" && playerSelection === "Scissor"){
    return "You Lose! Rock beats Scissor."
   }
   else if (computerSelection === "Scissor" && playerSelection === "Paper"){
    return "You Lose! Scissor beats Paper."
   }
   else if (computerSelection === "Paper" && playerSelection === "Rock"){
    return "You Lose! Paper beats Rock"
   }
   //win options
   else if (playerSelection === "Rock" && computerSelection === "Scissor"){
    return "You Win! Rock beats Scissor"
   }
   else if (playerSelection === "Scissor" && computerSelection === "Paper"){
    return "You Win! Scissor beats Paper."
   }
   else if (playerSelection === "Paper" && computerSelection === "Rock"){
    return "You Win! Paper beats Rock"
   }
   else{
    return "Please enter Rock, Paper or Scissor"
   }
}
function getComputerChoice (){
   const Hand = new Array("Rock", "Paper", "Scissor");

   let result = Math.floor(Math.random()* 3);
   return Hand[result]
}

function getPlayerSelection(){
    let = playerSelection = prompt("Rock, Paper or Scissor");
    return playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1);
}

const PlayerSelection = getPlayerSelection();
const ComputerSelection = getComputerChoice();
playGame(PlayerSelection, ComputerSelection);