const header = document.querySelector('header');

window.addEventListener('scroll', handleScroll);

function handleScroll(e) {
  if (window.scrollY >= window.innerHeight - parseInt(getComputedStyle(header).height.replace('px', ''))) {
    header.classList.add('header-active');
  }
  else {
    header.classList.remove('header-active');
  }
}