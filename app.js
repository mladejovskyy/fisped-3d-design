const realizace = document.querySelector('.realizace');
const realizaceTextUp = document.querySelector('.text-up');
const arrowRight = document.querySelector('.arrowRight');

realizace.addEventListener('mouseover', () => {
  realizaceTextUp.style.color = 'var(--clr-purple)';
  realizace.classList.add('active');
});

realizace.addEventListener('mouseout', () => {
  realizaceTextUp.style.color = ''; // Reset the color to its default value
  realizace.classList.remove('active');
});


// Animation

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= 0 &&
    rect.bottom <= windowHeight
  );
}

function animateTextItems() {
  var textItems = document.querySelectorAll('.text-item');

  textItems.forEach(function(item) {
    if (isElementInViewport(item)) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateTextItems);
window.addEventListener('resize', animateTextItems);

// Run the animation on page load
animateTextItems();