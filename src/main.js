import './js/partials_js/header';
import { refs } from './js/utils/refs';
import {
  handleSearch,
  handleCategoryClick,
} from './js/handlers/exercise_handlers';
import { handleRendelQuote } from './js/partials_js/qoute';
import { onFilterBtnClick } from './js/partials_js/filter';
import { handleSubscription } from './js/partials_js/subscription';

refs.searchForm.addEventListener('submit', handleSearch);
handleRendelQuote();
refs.filterBtnsList.addEventListener('click', onFilterBtnClick);
refs.footerForm.addEventListener('submit', handleSubscription);
refs.categories.addEventListener('click', handleCategoryClick);
