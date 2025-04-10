import iziToast from 'izitoast';

function exerciseCreateMarkup(exercises) {
  return exercises
    .map(
      exercise => `<li class="exercise-item" data-id="${exercise.id}">
        <div class="exercise-header">
          <p class="exercise-header-badge">WORKOUT</p>
          <div class="exercise-header-rating">
            <p>${exercise.rating}</p>
            <svg
              class="exercise-rating-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#star"></use>
            </svg>
          </div>
          <button class="exercise-header-button" type="button">
            <p>Start</p>
            <svg
              class="exercise-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href="./images/icons.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title">
          <div class="exercise-title-icon-tumb" width="24" height="24">
            <svg
              class="exercise-title-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${exercise.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${exercise.burnedCalories}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${exercise.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${exercise.target}
          </li>
        </ul>
      </li>`
    )
    .join('');
}

const exercises = [
  {
    _id: '64f389465ae26083f39b19d8',
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0710.gif',
    name: 'side hip abduction',
    target: 'abductors',
    description:
      'These are the muscles found on the lateral (outer) part of your hips, including the gluteus medius and minimus. They are responsible for moving your leg away from the midline of your body, like when you perform a side leg raise. Exercises like cable hip abductions and lateral band walks target these muscles.',
    rating: 3.89,
    burnedCalories: 63,
    time: 3,
    popularity: 5756,
  },
  {
    _id: '64f389465ae26083f39b1996',
    bodyPart: 'upper legs',
    equipment: 'leverage machine',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0597.gif',
    name: 'lever seated hip abduction',
    target: 'abductors',
    description:
      'These are the muscles found on the lateral (outer) part of your hips, including the gluteus medius and minimus. They are responsible for moving your leg away from the midline of your body, like when you perform a side leg raise. Exercises like cable hip abductions and lateral band walks target these muscles.',
    rating: 4.1,
    burnedCalories: 279,
    time: 3,
    popularity: 964,
  },
  {
    _id: '64f389465ae26083f39b1b1a',
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1427.gif',
    name: 'straight leg outer hip abductor',
    target: 'abductors',
    description:
      'These are the muscles found on the lateral (outer) part of your hips, including the gluteus medius and minimus. They are responsible for moving your leg away from the midline of your body, like when you perform a side leg raise. Exercises like cable hip abductions and lateral band walks target these muscles.',
    rating: 3.84,
    burnedCalories: 143,
    time: 3,
    popularity: 2600,
  },
  {
    _id: '64f389d55ae26083f39b1fc1',
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1774.gif',
    name: 'side bridge hip abduction',
    target: 'abductors',
    description:
      'These are the muscles found on the lateral (outer) part of your hips, including the gluteus medius and minimus. They are responsible for moving your leg away from the midline of your body, like when you perform a side leg raise. Exercises like cable hip abductions and lateral band walks target these muscles.',
    rating: 2.08,
    burnedCalories: 87,
    time: 3,
    popularity: 1749,
  },
  {
    _id: '64f389d55ae26083f39b2021',
    bodyPart: 'upper legs',
    equipment: 'resistance band',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/3006.gif',
    name: 'resistance band seated hip abduction',
    target: 'abductors',
    description:
      'These are the muscles found on the lateral (outer) part of your hips, including the gluteus medius and minimus. They are responsible for moving your leg away from the midline of your body, like when you perform a side leg raise. Exercises like cable hip abductions and lateral band walks target these muscles.',
    rating: 3.89,
    burnedCalories: 307,
    time: 3,
    popularity: 2756,
  },
];

const exercise_block = document.querySelector('.exercise-list');
exercise_block.innerHTML = exerciseCreateMarkup(exercises);

// async function handleSearch(event) {
//   event.preventDefault();

//   // скидання попередніх станів перед повторним запитом
//   // refs.notFoundText.innerHTML = '';
//   // loadMoreButton.hide();
//   const queryParams = {};
//   queryParams.page = 1;
//   queryParams.maxPage = 1;

//   const form = event.currentTarget;
//   const userQuery = form.elements.user_query.value.trim();

//   if (userQuery === '') {
//     iziToast.show('Будь ласка, введіть запит!');
//     return;
//   }

//   // refs.loader.classList.add(ACTIVE_CLASS);
//   queryParams.query = userQuery;

//   try {
//     const exercises = await getExercises(queryParams);

//     // refs.loader.classList.remove(ACTIVE_CLASS);

//     queryParams.maxPage = exercises.totalPages; // зберігаємо номер останньої сторінки в пагінації

//     if (exercises.results.length === 0) {
//       // refs.gallery.innerHTML = '';
//       refs.notFoundText.innerHTML = 'Нема вправ за цим ключовим словом';
//     }
//     // refs.gallery.innerHTML = exerciseCreateMarkup(exercises.results);

//     // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо кнопку завантажити більше
//     if (queryParams.maxPage === 1) {
//       return;
//     }

//     // loadMoreButton.show();
//     // loadMoreButton.enable();
//     // loadMoreButton.button.addEventListener('click', handleLoadMore);
//   } catch (err) {
//     // refs.loader.classList.remove(ACTIVE_CLASS);
//     console.log(err);
//   } finally {
//     form.reset();
//   }
// }

// export { handleSearch };
