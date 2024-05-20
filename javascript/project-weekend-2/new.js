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

const init = () => {
  playing = true;
};

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
});
init();
