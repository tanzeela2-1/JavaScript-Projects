let secretNumber;

let attempts = 0;
const isInRange = (secretNumber, guess) => {
  return Math.abs(secretNumber - guess) <= 2;
};
let maxRange;

let easyBtn = document.querySelector('#easy');
let hardBtn = document.querySelector('#hard');
const resetFun = () => {
  document.querySelector('body').style.backgroundColor = 'transparent';
};
const setDifficulty = (dif) => {
  if (dif === 'hard') {
    document.querySelector('#message').textContent =
      'Pick the number between 1 and  50';
    document.querySelector('body').style.backgroundColor = 'orange';
    maxRange = 20;
    hardBtn.classList.add('active');
    easyBtn.classList.remove('active');
  } else {
    document.querySelector('#message').textContent =
      'Pick the number between 1 and  10';
    document.querySelector('body').style.backgroundColor = 'purple';
    maxRange = 10;
    easyBtn.classList.add('active');
    hardBtn.classList.remove('active');
  }
  secretNumber = Math.floor(Math.random() * maxRange) + 1;
  console.log(secretNumber);
};
const checkGuess = () => {
  let guess = parseInt(document.querySelector('#guess').value);
  // let guess = document.querySelector('#guess').value;
  attempts = attempts + 1;

  if (guess === secretNumber) {
    document.querySelector('#message').textContent = 'correct!';
    document.querySelector('#message').style.color = 'purple';
    document.querySelector('body').style.backgroundColor = 'pink';
  } else if (isInRange(secretNumber, guess)) {
    document.querySelector('#message').textContent = 'very close ';
  } else if (guess > secretNumber) {
    document.querySelector('#message').textContent = 'too high!';
    document.querySelector('#message').style.color = 'blue';
  } else {
    document.querySelector('#message').textContent = 'too low!';
    document.querySelector('#message').style.color = 'green';
  }
  document.querySelector('#attempts').textContent = 'attempts:' + attempts;
};
document.querySelector('#checkBtn').addEventListener('click', checkGuess);
