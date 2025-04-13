import './js/partials_js/header';
import { refs } from './js/utils/refs';
import {
  handleSearch,
  handleCategoryClick,
} from './js/handlers/exercise_handlers';

import { handleRenderQuote } from './js/partials_js/quote';
import { onFilterBtnClick } from './js/partials_js/filter';
import { handleSubscription } from './js/partials_js/subscription';
import { loadCategories } from './js/partials_js/card-category';
import {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from './js/listeners/modals-listeners';
import { scrollUp } from './js/partials_js/scroll-up';

refs.searchForm.addEventListener('submit', handleSearch);
handleRenderQuote();
refs.filterBtnsList.addEventListener('click', onFilterBtnClick);
refs.footerForm.addEventListener('submit', handleSubscription);
refs.categories.addEventListener('click', handleCategoryClick);

loadCategories();

document.addEventListener('DOMContentLoaded', () => {
  setupModalsListeners();
  setupOpenExerciseModalLister();
  setupGiveRatingListener();
  scrollUp();
});
