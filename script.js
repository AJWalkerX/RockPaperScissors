let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissors");
let result = document.getElementById("result")
let showScore = document.getElementById("score")
let score = 0

function playRound(playerSelection, computerSelection){
   if(playerSelection === computerSelection){
    return "It's a tie";
   }
   //Lose options
   else if (computerSelection === "Rock" && playerSelection === "Scissor"){
      score--;
      return "You Lose! Rock beats Scissor."
   }
   else if (computerSelection === "Scissor" && playerSelection === "Paper"){
      score--;
      return "You Lose! Scissor beats Paper."
   }
   else if (computerSelection === "Paper" && playerSelection === "Rock"){
      score--;
      return "You Lose! Paper beats Rock"
   }
   //win options
   else if (playerSelection === "Rock" && computerSelection === "Scissor"){
      score++;
      return "You Win! Rock beats Scissor"
   }
   else if (playerSelection === "Scissor" && computerSelection === "Paper"){
      score++;
      return "You Win! Scissor beats Paper."
   }
   else if (playerSelection === "Paper" && computerSelection === "Rock"){
      score++;
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

function whoWined(){
   if (score == 5){
   showScore.innerHTML = "Game Finished! You Winned!";
   score = 0; 
   }
   else if(score < 0  ) {
      showScore.innerHTML = "Game Finished! You Lost!";
      score = 0; 
   }
   else{
      showScore.innerHTML = "Score: " + score;
   }
}

rock.addEventListener("click", ()=> {
   result.innerHTML = playRound("Rock", getComputerChoice());
   whoWined();
});
paper.addEventListener("click", ()=> {
   result.innerHTML = playRound("Paper", getComputerChoice());
   whoWined();
})
scissor.addEventListener("click", ()=> {
  result.innerHTML =  playRound("Scissor", getComputerChoice());
  whoWined();

})