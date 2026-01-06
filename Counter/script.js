let count = 0;
let countDisplay = document.querySelector('#count');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const updateColor = () => {
  if (count === 0) {
    countDisplay.style.color = 'red';
  } else {
    countDisplay.style.color = 'green';
  }
};
const increaseNum = () => {
  count = count + 1;
  countDisplay.textContent = count;
  updateColor();
};
const decreaseNum = () => {
  if (count > 0) {
    count = count - 1;
    countDisplay.textContent = count;
    updateColor();
  } else {
    alert('Count cannot go below 0!');
  }
};
decreaseBtn.addEventListener('click', decreaseNum);
