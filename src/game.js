export const CHOICES = Object.freeze({
  rock: { id: 'rock', symbol: '✊', label: 'Rock' },
  paper: { id: 'paper', symbol: '✋', label: 'Paper' },
  scissors: { id: 'scissors', symbol: '✌', label: 'Scissors' },
});

export const CHOICE_ORDER = Object.values(CHOICES);

export function getRandomChoice() {
  return CHOICE_ORDER[Math.floor(Math.random() * CHOICE_ORDER.length)];
}

export function determineWinner(playerChoice, opponentChoice) {
  if (playerChoice.id === opponentChoice.id) {
    return 'tie';
  }

  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningCombinations[playerChoice.id] === opponentChoice.id ? 'player' : 'opponent';
}

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
