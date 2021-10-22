const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// let currentScore, activePlayer, scores;
const def = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  totalScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};

def();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// User rolls dice
btnRoll.addEventListener('click', function () {
  if (scores[activePlayer] < 100){
    //1. generating random number
    let rand = Math.trunc(Math.random() * 6 + 1);
    // 2. display the random number(dice number)
    document.getElementById(`current--${activePlayer}`).textContent = rand;
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${rand}.png`;

    //   3. if rand !== 1
    if (rand !== 1) {
        // add rand to current score
      currentScore += rand;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
        // switch player
        switchPlayer();
      //   document.getElementById(`player--${activePlayer}`);
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.toggle('player--active');
    }
}
});

// User holds dice
btnHold.addEventListener('click', function () {
  if (scores[activePlayer] < 20){
    // 1. Add current score to total score, display score, reset current score to 0
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. if totalscore >=100,
    if (scores[activePlayer] >= 20) {
      //   active player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
    } else {
      //   switch player
      switchPlayer();
    }
}
});

// User starts new game
btnNew.addEventListener('click', function () {
  def();

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //   document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
});
