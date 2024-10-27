const sliderContainer = document.querySelector('.slider-container');
const matches = document.querySelectorAll('.match');

sliderContainer.addEventListener('scroll', () => {
  matches.forEach((match) => {
    const rect = match.getBoundingClientRect();
    const containerRect = sliderContainer.getBoundingClientRect();

    if (rect.right < containerRect.left || rect.left > containerRect.right) {
      match.style.opacity = '0'; // Rendre transparent hors du conteneur
    } else {
      match.style.opacity = '1'; // Rendre visible à l'intérieur du conteneur
    }
  });
});
