import { refs } from '.js/utils/refs';

async function handleSearch(event) {
  event.preventDefault();

  // скидання попередніх станів перед повторним запитом
  // refs.notFoundText.innerHTML = '';
  // loadMoreButton.hide();
  const queryParams = {};
  queryParams.page = 1;
  queryParams.maxPage = 1;

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    iziToast.show('Будь ласка, введіть запит!');
    return;
  }

  // refs.loader.classList.add(ACTIVE_CLASS);
  queryParams.query = userQuery;

  try {
    const exercises = await getExercises(queryParams);

    // refs.loader.classList.remove(ACTIVE_CLASS);

    queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

    if (exercises.results.length === 0) {
      refs.exercises.innerHTML = '';
      refs.notFoundText.innerHTML = 'Нема вправ за цим ключовим словом';
    }
    // refs.gallery.innerHTML = exerciseCreateMarkup(exercises.results);

    // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо кнопку завантажити більше
    if (queryParams.maxPage === 1) {
      return;
    }

    // loadMoreButton.show();
    // loadMoreButton.enable();
    // loadMoreButton.button.addEventListener('click', handleLoadMore);
  } catch (err) {
    // refs.loader.classList.remove(ACTIVE_CLASS);
    console.log(err);
  } finally {
    form.reset();
  }
}

export { handleSearch };
