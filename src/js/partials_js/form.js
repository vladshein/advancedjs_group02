import { refs } from '../utils/refs';
import { exerciseService } from '../services/services';
import { exerciseCreateMarkup } from '../template/exercisesMarkup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function handleSearch(event) {
  event.preventDefault();
  // скидання попередніх станів перед повторним запитом
  // refs.notFoundText.innerHTML = '';
  const queryParams = {
    page: 1,
    limit: 8,
    maxPage: 1,
    keyword: '',
    category_type: 'bodypart',
    category_name: 'waist',
  };

  const width = window.innerWidth;
  if (width >= 768) {
    queryParams.limit = 10;
  }

  console.log(queryParams);

  const form = event.currentTarget;
  const userQuery = form.elements.query.value.trim();
  console.log(userQuery);
  if (userQuery === '') {
    refs.exercises.innerHTML = '';
    iziToast.show({ message: 'Please entered your request' });
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
  } catch (err) {
    // refs.loader.classList.remove(ACTIVE_CLASS);
    console.log(err);
  } finally {
    form.reset();
  }
}

export { handleSearch };
