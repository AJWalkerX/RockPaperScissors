let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissors");



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


rock.addEventListener("click", ()=> {console.log(playRound("Rock", getComputerChoice()))})
paper.addEventListener("click", ()=> {console.log(playRound("Paper", getComputerChoice()))})
scissor.addEventListener("click", ()=> {console.log(playRound("Scissor", getComputerChoice()))})