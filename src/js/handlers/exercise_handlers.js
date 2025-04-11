import { exerciseService } from '../services/services';
import { renderPagination } from '../template/paginationMarkup';
import { exerciseCreateMarkup } from '../template/exercisesMarkup';
import { showErrorToast } from '../utils/utils';
import { refs } from '../utils/refs';
import { queryParams } from '../utils/consts';

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
        console.log(queryParams.maxPage);
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
        // refs.loader.classList.remove(ACTIVE_CLASS);
    }
}

async function handleSearch(event) {
    event.preventDefault();
    // скидання попередніх станів перед повторним запитом
    refs.exercisePageWrapper.innerHTML = '';
    refs.exercises.innerHTML = '';
    // refs.notFoundText.innerHTML = '';
    // queryParams = {
    //   page: 1,
    //   limit: 8,
    //   maxPage: 1,
    //   keyword: '',
    //   category_type: 'bodypart',
    //   category_name: 'waist',
    // };

    const width = window.innerWidth;
    if (width >= 768) {
        queryParams.limit = 10;
    }
    else {
        queryParams.limit = 8;
    }

    const form = event.currentTarget;
    const userQuery = form.elements.query.value.trim();
    if (userQuery === '') {
        refs.exercises.innerHTML = '';
        refs.exercisePageWrapper.innerHTML = '';
        showErrorToast('Please entered your request');
        return;
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

export { handleSearch, handlePageClick };
