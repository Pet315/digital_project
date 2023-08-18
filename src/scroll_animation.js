function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
  const scrollElement = document.querySelector('.about');
  if (isElementInViewport(scrollElement)) {
    scrollElement.style.opacity = '1';
  }
}

window.addEventListener('scroll', handleScrollAnimation);
