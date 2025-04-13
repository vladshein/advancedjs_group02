import { refs } from '../utils/refs';

function scrollUp() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      refs.scrollUp.style.display = 'block';
    } else {
      refs.scrollUp.style.display = 'none';
    }
  });

  refs.scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export { scrollUp };
