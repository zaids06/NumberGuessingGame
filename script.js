'use strict';
let res = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hS = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const diff = guess - res;
  //loop
  if (score > 0) {
    //check number is out of the limits
    if (guess === 0 || guess > 20 || guess < 1)
      document.querySelector('.message').textContent = '🚫 Wrong Choice';
    //valid
    else {
      //found the number
      if (res === guess) {
        document.querySelector('.message').textContent = '🥇 YOU WON!!!! 🏆';
        document.querySelector('.number').textContent = res;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        hS = Number(document.querySelector('.highscore').textContent);
        console.log(hS);
        if (hS < score)
          document.querySelector('.highscore').textContent = score;
      }
      //near to the number
      else if (diff < 5 && diff > -5) {
        score -= 1;
        if (diff > 0 && diff < 5)
          document.querySelector('.message').textContent =
            '😉 You are little ahead';
        else
          document.querySelector('.message').textContent =
            '😉 You are little below';
      }
      //far from the number
      else {
        score -= 1;
        if (diff > 0)
          document.querySelector('.message').textContent =
            '🤔 You are far ahead';
        else
          document.querySelector('.message').textContent =
            '🤔 You are far behind';
      }
    }
    let scoreRes = ' Score: ' + score;
    if (score >= 15)
      document.querySelector('.label-score').textContent = '😊' + scoreRes;
    else if (score >= 10)
      document.querySelector('.label-score').textContent = '😐' + scoreRes;
    else if (score >= 5)
      document.querySelector('.label-score').textContent = '😕' + scoreRes;
    else document.querySelector('.label-score').textContent = '🏳️' + scoreRes;
  } else {
    document.querySelector('.label-score').textContent =
      'Better luck next time 🤠';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  res = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
