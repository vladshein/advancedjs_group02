
import './js/partials_js/header';
import { refs } from './js/utils/refs';
import { handleSearch } from './js/partials_js/form';
import { handleRendelQuote } from './js/partials_js/qoute';
console.log(refs);
refs.searchForm.addEventListener('submit', handleSearch);
handleRendelQuote();

