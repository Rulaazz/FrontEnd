const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const diceElement1 = document.querySelector('.dice1');
const diceElement2 = document.querySelector('.dice2');
const current1 = document.getElementById('current-num1');
const current2 = document.getElementById('current-num2');
const num1 = document.querySelector('.total-num1');
const num2 = document.querySelector('.total-num2');
const btnNew = document.querySelector('.btn_new_game');
const btnRoll = document.querySelector('.btn_roll_dice');
const btnHold = document.querySelector('.btn--hold');

let player, current, scores, playing;

const init = () => {
  scores = [0, 0];
  player = 0;
  current = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  num1.textContent = 0;
  num2.textContent = 0;
  playing = true;
  diceElement1.classList.add('hidden');
  diceElement2.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('starting-player');
  player2.classList.remove('starting-player');
};
init();
btnRoll.addEventListener('click', function () {
  if (playing) {
    // random dice number two numbers
    const dice = Math.floor(Math.random() * 6) + 1;
    const dice1 = Math.floor(Math.random() * 6) + 1;
    diceElement1.src = `dice-${dice}.png`;
    diceElement1.classList.remove('hidden');
    diceElement2.src = `dice-${dice1}.png`;
    diceElement2.classList.remove('hidden');
  }

  if (dice == 6 && dice1 == 6) {
    switchPlayer();
  } else {
    current = dice + dice1;
    if (player === 0) {
      current1 += current;
      document.getElementById('current-num1').textContent = current;
    } else {
      current2 += current;
      document.getElementById('current-num2').textContent = current;
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
//switch player
const switchPlayer = () => {
  if (player === 0) {
    document.getElementById('current-num1').textContent = 0;
  } else {
    document.getElementById('current-num2').textContent = 0;
  }
  current = 0;

  player = player === 0 ? 1 : 0;
  player1.classList.toggle('starting-player');
  player2.classList.toggle('starting-player');
};

//end of switch player
btnHold.addEventListener('click', function () {
  if (playing) {
    if (player == 0) {
      num1 += current1;
      document.getElementById('total-num1').textContent = num1;
      scores[0] = num1;
      current1 = 0;
    } else {
      num2 += current2;
      document.getElementById('total-num2').textContent = num2;
      scores[1] = num2;
      current2 = 0;
    }

    if (scores[player] >= 100) {
      //Finish the game
      diceElement1.classList.add('hidden');
      diceElement2.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${player + 1}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player + 1}`)
        .classList.remove('starting-player');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
