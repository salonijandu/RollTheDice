'use strict';

const score0El = document.querySelector('#score--0');

const score1El = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const btnNew = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');

let playing = true;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

//function to switch Player to keep code DRY

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//setting initial conditions and values to 0
score0El.textContent = 0;
score1El.textContent = 0;

// hide dice when player is about to start the game
diceEl.classList.add('hidden');

//dice rolling
btnRoll.addEventListener('click', function () {
  //get the random number on dice when rolling
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //show the dice with number we get from rolling
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //applying condition
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch Player

      switchPlayer();
    }
  }
});
//functionality hold btn

btnHold.addEventListener('click', function () {
  //Add current score to active Player's score
  if (playing) {
    //eg: scores[1]= score[1] + currenScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //if scores >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      //end the game
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch ActivePlayer
      switchPlayer();
    }
  }
});

//new Game functionality
btnNew.addEventListener('click', function () {
  let playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  let currenScore = 0;
  let activePlayer = 0;
  const scores = [0, 0];
  diceEl.classList.add('hidden');
});
