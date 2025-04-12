import { exerciseService } from '../services/services';
import { renderPagination } from '../template/paginationMarkup';
import { exerciseCreateMarkup } from '../template/exercisesMarkup';
import { showErrorToast } from '../utils/utils';
import { refs } from '../utils/refs';
import { queryParams, category } from '../utils/consts';

async function handlePageClick(event) {
    const page = event.target.textContent;
    queryParams.page = Number(page);
    refs.exercisePageWrapper.innerHTML = '';
    refs.exercises.innerHTML = '';
    const width = window.innerWidth;
    if (width >= 768) {
        queryParams.limit = 10;
    }
    else {
        queryParams.limit = 8;
    }

    // refs.loader.classList.add(ACTIVE_CLASS);
    try {
        const exercises = await exerciseService.getExercisesWithParams(queryParams);

        // refs.loader.classList.remove(ACTIVE_CLASS);
        queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

        if (exercises.results.length === 0) {
            refs.exercises.innerHTML = '';
            //   refs.notFoundText.innerHTML = 'Нема вправ за цим ключовим словом';
        }
        refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);

        // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
        if (queryParams.maxPage === 1) {
            return;
        }

        // пагінація
        renderPagination(
            queryParams.page,
            queryParams.maxPage
        );

    } catch (err) {
        // refs.loader.classList.remove(ACTIVE_CLASS);
        console.log(err);
    } finally {
        // refs.loader.classList.remove(ACTIVE_CLASS);
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
    // refs.notFoundText.innerHTML = '';

    const width = window.innerWidth;
    if (width >= 768) {
        queryParams.limit = 10;
    }
    else {
        queryParams.limit = 8;
    }

    // refs.loader.classList.add(ACTIVE_CLASS);
    queryParams.keyword = userQuery;

    try {
        const exercises = await exerciseService.getExercisesWithParams(queryParams);

        // refs.loader.classList.remove(ACTIVE_CLASS);

        queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

        if (exercises.results.length === 0) {
            refs.exercises.innerHTML = '';
            //   refs.notFoundText.innerHTML = 'Нема вправ за цим ключовим словом';
        }
        refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);
        // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
        if (queryParams.maxPage === 1) {
            return;
        }

        // тут має бути пагінація
        renderPagination(
            queryParams.page,
            queryParams.maxPage
        );

    } catch (err) {
        // refs.loader.classList.remove(ACTIVE_CLASS);
        console.log(err);
    } finally {
        form.reset();
    }
}

async function handleCategoryClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
    refs.searchForm.classList.add('active-search-form');
    refs.exerciseContainer.classList.remove('hidden');
    // скидання попередніх станів перед повторним запитом
    refs.exercises.innerHTML = '';
    refs.cardContainer.classList.add('hidden');
    refs.exercisePageWrapper.innerHTML = '';

    queryParams.page = 1;
    queryParams.keyword = '';

 

    // refs.notFoundText.innerHTML = '';
    const width = window.innerWidth;
    if (width >= 768) {
        queryParams.limit = 10;
    }
    else {
        queryParams.limit = 8;
    }

    // refs.loader.classList.add(ACTIVE_CLASS);
    queryParams.category_name = event.target.querySelector('.category-name').textContent;
    queryParams.category_type = category[event.target.querySelector('.category-type').textContent.replace(/\s/g,'')];

    refs.exercisesHeader.innerHTML = `Exercises / <span class="exercise-header-category">${queryParams.category_name}</span>`;
    queryParams.category_name = queryParams.category_name.toLowerCase()

    try {
        const exercises = await exerciseService.getExercisesWithParams(queryParams);

        // refs.loader.classList.remove(ACTIVE_CLASS);

        queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

        if (exercises.results.length === 0) {
            refs.exercises.innerHTML = '';
            //   refs.notFoundText.innerHTML = 'Нема вправ за цим ключовим словом';
        }
        refs.exercises.innerHTML = exerciseCreateMarkup(exercises.results);
        // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо пагінацію
        if (queryParams.maxPage === 1) {
            return;
        }

        // тут має бути пагінація
        renderPagination(
            queryParams.page,
            queryParams.maxPage
        );

    } catch (err) {
        // refs.loader.classList.remove(ACTIVE_CLASS);
        console.log(err);
    } finally {
    }
}


export { handleSearch, handlePageClick, handleCategoryClick };
