import { CHOICES, determineWinner, getRandomChoice, getResultMessage } from './game.js';

const gameState = document.getElementById('gameState');
const opponentChoice = document.getElementById('opponentChoice');
const playerChoice = document.getElementById('playerChoice');
const resetButton = document.getElementById('resetButton');
const choiceButtons = document.querySelectorAll('.choice-button');

const state = {
  player: null,
  opponent: null,
  result: null,
};

function render() {
  opponentChoice.textContent = state.opponent ? state.opponent.symbol : '?';
  playerChoice.textContent = state.player ? state.player.symbol : '?';
  gameState.textContent = getResultMessage(state.result ?? 'idle');
}

function handlePlayerSelection(event) {
  const selectedChoice = CHOICES[event.currentTarget.dataset.choice];
  const randomChoice = getRandomChoice();
  const winner = determineWinner(selectedChoice, randomChoice);

  state.player = selectedChoice;
  state.opponent = randomChoice;
  state.result = winner;

  render();
}

function resetGame() {
  state.player = null;
  state.opponent = null;
  state.result = null;

  render();
}

choiceButtons.forEach((button) => {
  button.addEventListener('click', handlePlayerSelection);
});

resetButton.addEventListener('click', resetGame);

render();
