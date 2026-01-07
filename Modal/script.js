const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const overlaying = document.querySelector('.overlay');

const openModal = () => {
  modal.classList.remove('hidden');
  overlaying.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlaying.classList.add('hidden');
};
const overlayModal = () => {
  modal.classList.add('hidden');
  overlaying.classList.add('hidden');
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlaying.addEventListener('click', overlayModal);
