function playerRoll(roll) {
  const gameState = document.getElementById("gameState");
  const opponentChoice = document.getElementById("opponentChoice");
  const playerChoice = document.getElementById("playerChoice");
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    opponentChoice.innerHTML = "✊";
  } else if (randomNumber === 1) {
    opponentChoice.innerHTML = "✋";
  } else if (randomNumber === 2) {
    opponentChoice.innerHTML = "✌";
  }

  if (roll === "✊") {
    playerChoice.innerHTML = "✊";
  } else if (roll === "✋") {
    playerChoice.innerHTML = "✋";
  } else if (roll === "✌") {
    playerChoice.innerHTML = "✌";
  }

  if (opponentChoice.innerHTML === playerChoice.innerHTML) {
    gameState.innerHTML = "Tie!";
  } else if (
    (opponentChoice.innerHTML === "✊" && playerChoice.innerHTML === "✋") ||
    (opponentChoice.innerHTML === "✋" && playerChoice.innerHTML === "✌") ||
    (opponentChoice.innerHTML === "✌" && playerChoice.innerHTML === "✊")
  ) {
    gameState.innerHTML = "You won!";
  } else {
    gameState.innerHTML = "Your opponent won!";
  }
}

function reset() {
  const gameState = document.getElementById("gameState");
  const opponentChoice = document.getElementById("opponentChoice");
  const playerChoice = document.getElementById("playerChoice");

  gameState.innerHTML = "Make your choice to start the game.";
  opponentChoice.innerHTML = "?";
  playerChoice.innerHTML = "?";
}