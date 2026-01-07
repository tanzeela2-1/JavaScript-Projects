const preview = document.getElementById('preview');
const thumbnails = document.getElementsByClassName('thumb');

const updateImage = (event) => {
  const clickedThumb = event.target;

  preview.src = clickedThumb.src.replace('150x100', '600x400');

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
  }

  clickedThumb.classList.add('active');
};

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', updateImage);
}
