'use strict';

//Lựa chọn các phần tử
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');

//Phần tử xúc xắc
const diceEle = document.querySelector('.dice');

//Các nút khi tham gia trò chơi
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

//Triển khia chức năng xúc xắc lăn
//Thêm sự kiện vào cho nút Roll

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //console.log(dice);

  // 2. Display dice
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${dice}.png`;
  //3.Kiểm tra khi roll là 1
  if (dice !== 1) {
    //thêm xúc xắc vào điểm hiện tại
    currentScore += dice; // = currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //current0Ele.textContent = currentScore; // Change late
  } else {
    //Chuyẻn sang người chơi tiếp theo
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //console.log('Hold button');
  //1. Cộng điểm hiện tại vào điểm người chơi đang haotj động
  scores[activePlayer] += currentScore;
  //console.log(scores[activePlayer]);

  // scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check điểm số >=100
  if (score[activePlayer] >= 100) {
    //Game sẽ kết thúc
    document
      .querySelector('player--${activePlayer}')
      .classList.add('player--winner');
    document
      .querySelector('player--${activePlayer}')
      .classList.remove('player--active');
  }
  slse;
  //Chuyển sang người chơi tiếp theo
  switchPlayer();
});
