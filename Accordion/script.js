const questions = document.querySelectorAll('.question');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    const answer = questions[i].nextElementSibling;

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block'; // Shows the answer
    } else {
      answer.style.display = 'none'; // Hides the answer
    }
  });
}
