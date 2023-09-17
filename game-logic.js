const choices = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {
  console.log("Human vs. Computer: Rock, Paper, Scissors");

  let input = prompt("Hi human, type rock, paper, or scissors: ");
  let formattedSelection = input.charAt(0).toUpperCase() + input.slice(1);
  let isValidChoice = choices.includes(formattedSelection);

  while (!isValidChoice) {
    console.log(`${input} is invalid`);
    input = prompt("Hi human, type rock, paper, or scissors: ");
    formattedSelection = input.charAt(0).toUpperCase() + input.slice(1);
    isValidChoice = choices.includes(formattedSelection);
  }

  return formattedSelection;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  let isWinner = false;
  let resultMessage = `You ${isWinner ? "Win" : "Lose"}! ${
    isWinner ? playerSelection : computerSelection
  } beats ${isWinner ? computerSelection : playerSelection}`;

  switch (playerSelection) {
    case "rock":
      isWinner = computerSelection === "scissors" ? true : false;
      break;
    case "paper":
      isWinner = computerSelection === "rock" ? true : false;
      break;
    case "scissors":
      isWinner = computerSelection === "paper" ? true : false;
      break;
  }

  if (playerSelection === computerSelection) resultMessage = "Tie!";

  return resultMessage;
}

function game() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  alert(result);
}

game();
