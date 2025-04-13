import { handleRenderQuote } from './quote.js';
import { exerciseService } from '../services/services.js';
import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';
import {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from '../listeners/modals-listeners.js';

document.addEventListener('DOMContentLoaded', () => {
  handleRenderQuote();
  setupModalsListeners();
  setupOpenExerciseModalLister();
  setupGiveRatingListener();

  // Initiate only on favorites page
  if (window.location.pathname.includes('favorite.html')) {
    renderFavoritesPage();
  }
});

const exerciseList = document.querySelector('.exercise-list');
const exerciseContainer = document.querySelector('.exercise-container');
const notFoundContainer = document.querySelector(
  '.favorite_not_found_containers'
);
const paginationWrapper = document.querySelector('.exercise-page-wrapper');

// Close modals on ESC
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (refs.exerciseModal.classList.contains('is-open')) {
      refs.exerciseModal.classList.remove('is-open');
    }

    if (refs.giveRatingModal.classList.contains('is-open')) {
      refs.giveRatingModal.classList.remove('is-open');
      refs.exerciseModal.classList.add('is-open');
    }
  }
});

function renderFavoritesPage() {
  // Отримуємо ID вправ з localStorage
  const favoriteExerciseIds =
    JSON.parse(localStorage.getItem('favorites')) || [];

  // Показуємо контейнер (прибираємо клас hidden)
  exerciseContainer.classList.remove('hidden');

  if (favoriteExerciseIds.length > 0) {
    loadAndDisplayExercises();
  } else {
    showNoExercisesMessage();
  }

  function loadAndDisplayExercises() {
    // Ховаємо повідомлення про відсутність вправ
    notFoundContainer.style.display = 'none';

    // Показуємо індикатор завантаження
    exerciseList.innerHTML =
      '<li class="loading-msg">Loading your favorite exercises...</li>';

    // Отримуємо повні дані про вправи
    const exercisesPromises = favoriteExerciseIds.map(function (id) {
      return exerciseService.getExerciseById(id).catch(function (error) {
        console.error('Error loading exercise ' + id + ':', error);
        return null;
      });
    });

    Promise.all(exercisesPromises)
      .then(function (exercises) {
        const validExercises = exercises.filter(function (ex) {
          return ex !== null;
        });

        if (validExercises.length > 0) {
          displayExercises(validExercises);
        } else {
          showNoExercisesMessage();
        }
      })
      .catch(function (error) {
        console.error('Error loading favorites:', error);
        showLoadError();
      });
  }
}

function displayExercises(exercises) {
  // Ховаємо повідомлення про відсутність вправ
  notFoundContainer.style.display = 'none';

  // Відображаємо список вправ
  exerciseList.innerHTML = exerciseCreateMarkup(exercises);

  // Тут можна додати логіку пагінації, якщо потрібно
  paginationWrapper.innerHTML = ''; // Очищаємо пагінацію
}

function showNoExercisesMessage() {
  // Показуємо повідомлення про відсутність вправ
  notFoundContainer.style.display = 'block';

  // Очищаємо список вправ і пагінацію
  exerciseList.innerHTML = '';
  paginationWrapper.innerHTML = '';
}

function showLoadError() {
  // Ховаємо повідомлення про відсутність вправ
  notFoundContainer.style.display = 'none';

  // Показуємо повідомлення про помилку
  exerciseList.innerHTML =
    '<li class="error-msg">Failed to load favorites. Please try again.</li>';
  paginationWrapper.innerHTML = '';
}

// import { ExerciseService } from '../services/exercises.js';
// import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';

// document.addEventListener('DOMContentLoaded', function() {
//     const exerciseList = document.querySelector('.exercise-list');
//     const exerciseContainer = document.querySelector('.exercise-container');
//     const notFoundMessage = document.querySelector('.favorite_not_found');

//     // Ініціалізуємо сервіс
//     const exerciseService = new ExerciseService();

//     // Отримуємо ID вправ з localStorage
//     const favoriteExerciseIds = JSON.parse(localStorage.getItem('favorites')) || [];

//     // Показуємо контейнер
//     exerciseContainer.classList.remove('hidden');

//     if (favoriteExerciseIds.length > 0) {
//         loadAndDisplayExercises();
//     } else {
//         showNoExercisesMessage();
//     }

//     function loadAndDisplayExercises() {
//         // Додаємо індикатор завантаження
//         exerciseList.innerHTML = '<li class="loading-msg">Loading your favorite exercises...</li>';

//         // Отримуємо повні дані про вправи
//         const exercisesPromises = favoriteExerciseIds.map(function(id) {
//             return exerciseService.getExerciseById(id).catch(handleExerciseLoadError);
//         });

//         Promise.all(exercisesPromises)
//             .then(filterValidExercises)
//             .then(displayExercises)
//             .catch(handleLoadError);
//     }

//     function handleExerciseLoadError(e) {
//         console.error('Error loading exercise:', e);
//         return null;
//     }

//     function filterValidExercises(exercises) {
//         return exercises.filter(function(ex) {
//             return ex !== null;
//         });
//     }

//     function displayExercises(validExercises) {
//         if (validExercises.length > 0) {
//             exerciseList.innerHTML = exerciseCreateMarkup(validExercises);
//             if (notFoundMessage) notFoundMessage.style.display = 'none';
//         } else {
//             showNoExercisesMessage();
//         }
//     }

//     function handleLoadError(error) {
//         console.error('Error loading favorites:', error);
//         exerciseList.innerHTML = '<li class="error-msg">Failed to load favorites. Please try again.</li>';
//         if (notFoundMessage) notFoundMessage.style.display = 'none';
//     }

//     function showNoExercisesMessage() {
//         exerciseList.innerHTML = '';
//         if (notFoundMessage) notFoundMessage.style.display = 'block';
//     }
// });

export { renderFavoritesPage };
