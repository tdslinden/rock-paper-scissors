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

let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let isWinner = false;
  let isTie = false;
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

  if (playerSelection === computerSelection) {
    resultMessage = "Tie!";
    isTie = true;
  }

  if (isWinner) {
    humanScore++;
  } else if (!isTie) {
    computerScore++;
  }

  return resultMessage;
}

function game() {
  while (humanScore !== 5 && computerScore !== 5) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let immediateResult = playRound(playerSelection, computerSelection);
    console.log(immediateResult);
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Human Wins!");
  } else if (humanScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Tie!");
  }
}

game();
