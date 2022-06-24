'use strict';

// Selecting elements
const scorePlayer1El = document.getElementById('score--0');
const scorePlayer2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');

// Start conditions
scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
diceEl.classList.add('hidden');
currentScorePlayer1.textContent = 0;
currentScorePlayer2.textContent = 0;

// Scores
const scores = [0, 0];
let currentScore = 0;

// Players
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// Buttons
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Active player
const activePlayer = function () {
  return player1.classList.contains('player--active') ? 0 : 1;
};

// Swich active player
const swichPlayer = function (player) {
  if (player === 0) {
    player2.classList.add('player--active');
    player1.classList.remove('player--active');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
};

// Rolling dice
const dice = function (player) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber === 1) {
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-1.png';
    document.getElementById(`current--${player}`).textContent = 0;
    swichPlayer(player);
  } else {
    // Adding to current score
    if (scores[`${player}`] < 100) {
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${randomNumber}.png`;
      currentScore += randomNumber;
      document.getElementById(`current--${player}`).textContent = currentScore;
    }
  }
};

// Clicking on roll dice
rollDice.addEventListener('click', function () {
  dice(activePlayer());
});

// Adding current score to score
holdBtn.addEventListener('click', function () {
  const player = activePlayer();
  diceEl.classList.add('hidden');
  scores[`${player}`] += currentScore;
  document.getElementById(`current--${player}`).textContent = 0;
  currentScore = 0;
  document.getElementById(`score--${player}`).textContent = scores[`${player}`];
  // Cheking the winner or swiching players
  if (scores[`${player}`] >= 100) {
    console.log('winner');
    document
      .querySelector(`.player--${player}`)
      .classList.add('player--winner');
    document.getElementById(`name--${player}`).classList.add('player--winner');
  } else {
    swichPlayer(player);
  }
});

// New game
newGame.addEventListener('click', function () {
  scorePlayer1El.textContent = 0;
  scorePlayer2El.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  diceEl.classList.add('hidden');
});
