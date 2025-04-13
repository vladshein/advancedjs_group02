import './js/partials_js/header';
import { refs } from './js/utils/refs';
import {
  handleSearch,
  handleCategoryClick,
} from './js/handlers/exercise_handlers';

import { handleRenderQuote } from './js/partials_js/quote';
import { onFilterBtnClick } from './js/partials_js/filter';
import {
  handleSubscription,
  setFooterYear,
} from './js/partials_js/subscription';
import { loadCategories } from './js/partials_js/card-category';
import {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from './js/listeners/modals-listeners';

loadCategories();
handleRenderQuote();
refs.searchForm.addEventListener('submit', handleSearch);
refs.filterBtnsList.addEventListener('click', onFilterBtnClick);
refs.footerForm.addEventListener('submit', handleSubscription);
refs.categories.addEventListener('click', handleCategoryClick);

setFooterYear();

document.addEventListener('DOMContentLoaded', () => {
  setupModalsListeners();
  setupOpenExerciseModalLister();
  setupGiveRatingListener();
});

// Close modals on ESC
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (refs.exerciseModal.classList.contains('is-open')) {
      refs.exerciseModal.classList.remove('is-open');
    }

    if (refs.giveRatingModal.classList.contains('is-open')) {
      refs.giveRatingModal.classList.remove('is-open');
      refs.exerciseModal.classList.add('is-open');
    }
  }
});
