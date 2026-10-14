// All valid moves in the game, each mapped to a symbol and display label.
export const CHOICES = Object.freeze({
  rock: { id: 'rock', symbol: '✊', label: 'Rock' },
  paper: { id: 'paper', symbol: '✋', label: 'Paper' },
  scissors: { id: 'scissors', symbol: '✌', label: 'Scissors' },
});

// Used to select a random move from the available choices.
export const CHOICE_ORDER = Object.values(CHOICES);

// Pick a random move for the opponent.
export function getRandomChoice() {
  return CHOICE_ORDER[Math.floor(Math.random() * CHOICE_ORDER.length)];
}

// Determine the outcome of a round based on the classic rock-paper-scissors rules.
export function determineWinner(playerChoice, opponentChoice) {
  // The same move means a draw.
  if (playerChoice.id === opponentChoice.id) {
    return 'tie';
  }

  // A move beats the move it can counter in the game rules.
  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  // If the player's move counters the opponent's move, the player wins; otherwise the opponent wins.
  return winningCombinations[playerChoice.id] === opponentChoice.id ? 'player' : 'opponent';
}

// Return the text displayed to the user after a round.
export function getResultMessage(result) {
  switch (result) {
    case 'tie':
      return 'Tie!';
    case 'player':
      return 'You won!';
    case 'opponent':
      return 'Your opponent won!';
    default:
      return 'Make your choice to start the game.';
  }
}
