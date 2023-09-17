const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
  console.log("Human vs. Computer: Rock, Paper, Scissors");

  let input = prompt("Hi human, type rock, paper, or scissors: ");
  let formattedSelection = input.toLowerCase();
  let isValidChoice = choices.includes(formattedSelection);

  while (!isValidChoice) {
    console.log(`${input} is invalid`);
    input = prompt("Hi human, type rock, paper, or scissors: ");
    formattedSelection = input.toLowerCase();
    isValidChoice = choices.includes(formattedSelection);
  }

  return formattedSelection;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function determineWinner(playerSelection, computerSelection) {
  // Rock beats Scissors
  // Paper beats Rock
  // Scissors beats Paper
  // Else tie
  // Message is displayed in terms of player's perspective
}

function playRound() {
  const playerSelection = getPlayerChoice();
  // const computerSelection = getComputerChoice();
  // determineWinner(playerSelection, computerSelection);
}

playRound();
