// Import the game rules and utilities from the separate game logic module.
import { CHOICES, determineWinner, getRandomChoice, getResultMessage } from './game.js';

// Grab references to key DOM elements for updating the UI.
const gameState = document.getElementById('gameState');
const opponentChoice = document.getElementById('opponentChoice');
const playerChoice = document.getElementById('playerChoice');
const resetButton = document.getElementById('resetButton');
const choiceButtons = document.querySelectorAll('.choice-button');

// Track the current round state so the UI can re-render consistently.
const state = {
  player: null,
  opponent: null,
  result: null,
};

// Update the visible choice symbols and result message at any point.
function render() {
  opponentChoice.textContent = state.opponent ? state.opponent.symbol : '?';
  playerChoice.textContent = state.player ? state.player.symbol : '?';
  gameState.textContent = getResultMessage(state.result ?? 'idle');
}

// Handle a player's click by comparing their move to the computer's random move.
function handlePlayerSelection(event) {
  const selectedChoice = CHOICES[event.currentTarget.dataset.choice];
  const randomChoice = getRandomChoice();
  const winner = determineWinner(selectedChoice, randomChoice);

  // Store the round result and selected moves before re-rendering the board.
  state.player = selectedChoice;
  state.opponent = randomChoice;
  state.result = winner;

  render();
}

// Clear the board back to its default state.
function resetGame() {
  state.player = null;
  state.opponent = null;
  state.result = null;

  render();
}

// Attach click listeners to each move button.
choiceButtons.forEach((button) => {
  button.addEventListener('click', handlePlayerSelection);
});

// Reset the game when the reset button is clicked.
resetButton.addEventListener('click', resetGame);

// Initial render ensures the page starts in its default state.
render();
