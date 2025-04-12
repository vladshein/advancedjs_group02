import { showErrorToast } from '../utils/utils.js';
import { renderPagination } from '../template/paginationMarkup.js';
import { refs } from '../utils/refs.js';
import {filtersService} from "../services/services.js";
async function loadCategories(page = 1) {
  const filterRequest = filtersService.getFilterQuery();
  const limit = window.innerWidth < 768 ? 9 : 12;

  try {
    const filteredCategories = await filtersService.fetchFilteredData(
      filterRequest,
      limit,
      page
    );

    const sortedResults = filteredCategories.results.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    refs.categories.innerHTML = '';
    sortedResults.forEach(category => {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category-card';

      categoryCard.innerHTML = `
        <img
          src="${category.imgURL}"
          srcset="${category.imgURL} 1x, ${category.imgURL} 2x"
          alt="${category.name} exercise"
        />
        <div class="category-name">${
          category.name.charAt(0).toUpperCase() + category.name.slice(1)
        }</div>
        <div class="category-type">${category.filter}</div>
      `;

      refs.categories.appendChild(categoryCard);
    });

    refs.categoriesWrap.innerHTML = '';
    if (filteredCategories.totalPages > 1) {
      renderPagination(
        refs.categoriesWrap,
        page,
        filteredCategories.totalPages,
        handleCardPageClick
      );
    }
  } catch (error) {
    showErrorToast(
      'Failed to load exercise categories. Please try again later.'
    );
  }
}

function handleCardPageClick(event) {
  const page = Number(event.target.textContent);
  loadCategories(page);
}

// loadCategories();
export { loadCategories };