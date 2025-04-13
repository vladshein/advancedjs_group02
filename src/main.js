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

refs.searchForm.addEventListener('submit', handleSearch);
handleRenderQuote();
refs.filterBtnsList.addEventListener('click', onFilterBtnClick);
refs.footerForm.addEventListener('submit', handleSubscription);
refs.categories.addEventListener('click', handleCategoryClick);

loadCategories();
setFooterYear();

document.addEventListener('DOMContentLoaded', () => {
  setupModalsListeners();
  setupOpenExerciseModalLister();
  setupGiveRatingListener();
});
