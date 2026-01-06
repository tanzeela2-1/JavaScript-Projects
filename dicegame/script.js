const diceImg = document.getElementById('diceImg');
const diceNumber = document.getElementById('diceNumber');
const result = document.getElementById('result');

const diceImages = {
  1: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
  2: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
  3: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
  4: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg',
  5: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg',
  6: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg',
};

function rollDice() {
  diceImg.classList.add('roll');

  setTimeout(() => {
    const dice = Math.floor(Math.random() * 6) + 1;

    diceImg.src = diceImages[dice];
    diceNumber.innerText = `You rolled: ${dice}`;

    if (dice === 6) {
      result.innerText = '🎉 You Win!';
      result.style.color = 'green';
    } else {
      result.innerText = '❌ Try Again!';
      result.style.color = 'red';
    }

    diceImg.classList.remove('roll');
  }, 300);
}

function restartGame() {
  diceImg.src = diceImages[1];
  diceNumber.innerText = '';
  result.innerText = '';
}
