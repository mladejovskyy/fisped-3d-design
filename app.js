const realizace = document.querySelector('.realizace');
const realizaceTextUp = document.querySelector('.text-up');
const arrowRight = document.querySelector('.arrowRight');

realizace.addEventListener('mouseover', () => {
  realizaceTextUp.style.color = 'var(--clr-purple)';
  arrowRight.style.width = '7vw'
});

realizace.addEventListener('mouseout', () => {
  realizaceTextUp.style.color = ''; // Reset the color to its default value
  arrowRight.style.width = ''
});