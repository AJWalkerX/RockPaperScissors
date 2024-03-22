# Rock Paper Scissors
The Odin Project Rock Paper Scissors Game

1. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"

 - Make your function’s playerSelection parameter case-insensitive (so users can input      rock,ROCK, RocK or any other variation).

3. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

4. Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.

Reference : https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#project-solution