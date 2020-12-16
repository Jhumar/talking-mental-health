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

const carouselItems = document.querySelectorAll('.carousel-slideshow-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let currentItem = 0;

const handleButtonPrev = () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }

  showCurrentSlide();
};

const handleButtonNext = () => {
  currentItem++;
  if (currentItem > carouselItems.length - 1) {
    currentItem = 0;
  }
  
  showCurrentSlide();
};

const showCurrentSlide = () => {
  carouselItems.forEach((item, index) => {
    item.classList.remove('carousel-slideshow-item-current');
    if (index == currentItem) {
      item.classList.add('carousel-slideshow-item-current');
    }
  });
};

btnPrev?.addEventListener('click', handleButtonPrev);
btnNext?.addEventListener('click', handleButtonNext);