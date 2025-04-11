import { refs } from '../utils/refs.js';
import { filtersService } from '../services/services.js';

function onFilterBtnClick(event) {
    refs.filterBtns.forEach(btn => {
      btn.classList.remove('active-filter-btn');
    });

    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    event.target.classList.add('active-filter-btn');

    filtersService.setFilterQuery(event.target.textContent.trim());
    console.log(filtersService.getFilterQuery());
}
  
export { onFilterBtnClick };