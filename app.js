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

  return rect.top >= 0 && rect.bottom <= windowHeight;
}

function animateTextItems() {
  var textItems = document.querySelectorAll('.text-item');
  var animaceNadpis = document.querySelectorAll('.animace-nadpis');
  var animaceText = document.querySelectorAll('.animace-text');
  var animaceRealizace = document.querySelectorAll('.animace-realizace');

  textItems.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add('show');
    }
  });

  animaceNadpis.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add('show');
    }
  });

  animaceText.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add('show');
    }
  });

  animaceRealizace.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add('show');
    }
  });
}

// Trigger the animation on page load
window.addEventListener('DOMContentLoaded', animateTextItems);

// Trigger the animation on scroll and resize
window.addEventListener('scroll', animateTextItems);
window.addEventListener('resize', animateTextItems);


// Run the animation on page load
animateTextItems();

if(animaceRealizace.classlist.contains("show")) {
animaceRealizace.classlist.remove("animace-realizace")
}