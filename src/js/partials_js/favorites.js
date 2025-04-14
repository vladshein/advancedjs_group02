import { handleRenderQuote } from './quote.js';
import { exerciseService } from '../services/services.js';
import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';
import {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from '../listeners/modals-listeners.js';
import { setupDeleteFavoriteCardListener } from '../listeners/favorites-listeners.js';

if (!window.quoteRendered) {
  handleRenderQuote();
  window.quoteRendered = true;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initiate only on favorites page
  if (window.location.pathname.includes('favorite.html')) {
    renderFavoritesPage();
    setupModalsListeners();
    setupOpenExerciseModalLister();
    setupGiveRatingListener();
  }
});

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

const exerciseList = document.querySelector('.favorite-exercise-list');
const exerciseContainer = document.querySelector('.favorite-exercise-list');
const notFoundContainer = document.querySelector(
  '.favorite_not_found_containers'
);
const paginationWrapper = document.querySelector('.exercise-page-wrapper');

function renderFavoritesPage() {
  // Отримуємо ID вправ з localStorage
  const favoriteExerciseIds =
    JSON.parse(localStorage.getItem('favorites')) || [];

  if (favoriteExerciseIds.length > 0) {
    loadAndDisplayExercises();
  } else {
    showNoExercisesMessage();
  }

  function loadAndDisplayExercises() {
    // Ховаємо повідомлення про відсутність вправ
    notFoundContainer.style.display = 'none';

    exerciseContainer.style.display = 'flex';

    // Показуємо індикатор завантаження
    exerciseList.innerHTML =
      '<li class="loading-msg">Loading your favorite exercises...</li>';

    // Отримуємо повні дані про вправи
    const exercisesPromises = favoriteExerciseIds.map(id => {
      return exerciseService.getExerciseById(id).catch(error => {
        console.error('Error loading exercise ' + id + ':', error);
        return null;
      });
    });

    Promise.all(exercisesPromises)
      .then(exercises => {
        const validExercises = exercises.filter(ex => {
          return ex !== null;
        });

        if (validExercises.length > 0) {
          displayExercises(validExercises);
          setupDeleteFavoriteCardListener();
        } else {
          showNoExercisesMessage();
        }
      })
      .catch(error => {
        console.error('Error loading favorites:', error);
        showLoadError();
      });
  }
}

function displayExercises(exercises) {
  // Ховаємо повідомлення про відсутність вправ
  notFoundContainer.style.display = 'none';

  // Відображаємо список вправ
  exerciseList.innerHTML = exerciseCreateMarkup(exercises, true);

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

export { renderFavoritesPage };
