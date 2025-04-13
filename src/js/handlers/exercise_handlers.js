import { exerciseService } from '../services/services';
import { renderPagination } from '../template/paginationMarkup';
import { exerciseCreateMarkup } from '../template/exercisesMarkup';
import { showErrorToast } from '../utils/utils';
import { refs } from '../utils/refs';
import { queryParams, category, notFoundText } from '../utils/consts';

async function handlePageClick(event) {
  const page = event.target.textContent;
  queryParams.page = Number(page);
  queryParams.limit = window.innerWidth >= 768 ? 10 : 8;

  refs.exercisePageWrapper.innerHTML = '';
  refs.exercises.innerHTML = '';

  try {
    refs.exercises.innerHTML = `<div class="loader"></div>`;
    const exercises = await exerciseService.getExercisesWithParams(queryParams);
    queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації
    refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);

    // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
    if (queryParams.maxPage === 1) {
      return;
    }

    // пагінація
    renderPagination(
      refs.exercisePageWrapper,
      queryParams.page,
      queryParams.maxPage,
      handlePageClick
    );
  } catch (err) {
    showErrorToast('Failed to load exercises. Please try again later.');
  }
}

async function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const userQuery = form.elements.query.value.trim();

  if (userQuery === '') {
    showErrorToast('Please entered your request');
    return;
  }
  // скидання попередніх станів перед повторним запитом
  refs.exercisePageWrapper.innerHTML = '';
  refs.exercises.innerHTML = '';

  queryParams.page = 1;
  queryParams.limit = window.innerWidth >= 768 ? 10 : 8;
  queryParams.keyword = userQuery;

  try {
    refs.exercises.innerHTML = `<div class="loader"></div>`;

    const exercises = await exerciseService.getExercisesWithParams(queryParams);
    queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

    if (exercises.results.length === 0) {
      refs.exercises.innerHTML = `<p class="exercise-title-text">${notFoundText}</p>`;
      return;
    }

    refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);
    // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
    if (queryParams.maxPage === 1) {
      return;
    }

    renderPagination(
      refs.exercisePageWrapper,
      queryParams.page,
      queryParams.maxPage,
      handlePageClick
    );
  } catch (err) {
    showErrorToast('Failed to load exercises. Please try again later.');
  } finally {
    form.reset();
  }
}

async function handleCategoryClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  refs.exercises.innerHTML = '';
  refs.exercisePageWrapper.innerHTML = '';
  refs.searchForm.classList.add('active-search-form');
  refs.cardContainer.classList.add('hidden');
  refs.exerciseContainer.classList.remove('hidden');

  queryParams.page = 1;
  queryParams.keyword = '';
  queryParams.limit = window.innerWidth >= 768 ? 10 : 8;
  queryParams.category_name =
    event.target.querySelector('.category-name').textContent;
  queryParams.category_type =
    category[
      event.target
        .querySelector('.category-type')
        .textContent.replace(/\s/g, '')
    ];

  refs.exercisesHeader.innerHTML = `Exercises / <span class="exercise-header-category">${queryParams.category_name}</span>`;
  queryParams.category_name = queryParams.category_name.toLowerCase();

  try {
    refs.exercises.innerHTML = `<div class="loader"></div>`;
    const exercises = await exerciseService.getExercisesWithParams(queryParams);
    queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

    if (exercises.results.length === 0) {
      refs.exercises.innerHTML = `<p class="exercise-title-text">${notFoundText}</p>`;
      return;
    }
    refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);

    // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
    if (queryParams.maxPage === 1) {
      return;
    }

    //пагінація
    renderPagination(
      refs.exercisePageWrapper,
      queryParams.page,
      queryParams.maxPage,
      handlePageClick
    );
  } catch (err) {
    // refs.loader.classList.remove(ACTIVE_CLASS);
    showErrorToast('Failed to load exercises. Please try again later.');
  }
}

export { handleSearch, handlePageClick, handleCategoryClick };
