
import './js/partials_js/header';
import { refs } from './js/utils/refs';
import { handleSearch, handleCategoryClick } from './js/handlers/exercise_handlers';
import { handleRendelQuote } from './js/partials_js/qoute';
refs.searchForm.addEventListener('submit', handleSearch);
handleRendelQuote();

refs.categories.addEventListener('click', handleCategoryClick);