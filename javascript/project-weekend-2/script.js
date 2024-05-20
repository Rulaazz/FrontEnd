const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const diceElement1 = document.querySelector('.dice1');
const diceElement2 = document.querySelector('.dice2');
const current1 = document.querySelector('.current-num1');
const current2 = document.querySelector('.current-num2');
const num1 = document.querySelector('.total-num1');
const num2 = document.querySelector('.total-num2');
const btnNew = document.querySelector('.btn_new_game');
const btnRoll = document.querySelector('.btn_roll_dice');
const btnHold = document.querySelector('.btn-hold');

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
  // random dice number two numbers
  const dice = Math.floor(Math.random() * 6) + 1;
  const dice1 = Math.floor(Math.random() * 6) + 1;
  if (playing) {
    diceElement1.src = `dice-${dice}.png`;
    diceElement1.classList.remove('hidden');
    diceElement2.src = `dice-${dice1}.png`;
    diceElement2.classList.remove('hidden');

    if (dice == 6 && dice1 == 6) {
      switchPlayer();
    } else {
      current = dice + dice1;
      console.log(player);
      if (player === 0) {
        current1.textContent = current + parseInt(current1.textContent);

        //document.getElementById('current-num1').textContent = current;
      } else {
        current2.textContent = current + parseInt(current2.textContent);
        //document.getElementById('current-num2').textContent = current;
      }
    }
  }
});
init();
btnNew.addEventListener('click', function () {
  init();
});

//switch player
const switchPlayer = () => {
  if (player === 0) {
    num1.textContent =
      parseInt(current1.textContent) + parseInt(num1.textContent);
    current1.textContent = 0;
  } else {
    num2.textContent =
      parseInt(current2.textContent) + parseInt(num2.textContent);
    current2.textContent = 0;
  }
  current = 0;

  player = player === 0 ? 1 : 0;
  player1.classList.toggle('starting-player');
  player2.classList.toggle('starting-player');
};
//end of switch player

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[0] = parseInt(num1.textContent);
    scores[1] = parseInt(num2.textContent);

    console.log(scores);
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
      player++;
      document.querySelector('h1').innerHTML =
        `player-${player}` + ' WINS!' + '&#128513';
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document.querySelector('h1').innerHTML = 'Play Now!';
  init();
});
