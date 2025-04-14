import { handleRenderQuote } from './quote.js';
import { exerciseService } from '../services/services.js';
import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';
import {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from '../listeners/modals-listeners.js';
import { setupDeleteFavoriteCardListener } from '../listeners/favorites-listeners.js';
import { renderPagination } from '../template/paginationMarkup.js';
import { favoriteExercises } from '../utils/consts.js';

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
const exerciseContainer = document.querySelector('.exercise-container');
const notFoundContainer = document.querySelector(
  '.favorite_not_found_containers'
);
const paginationWrapper = document.querySelector('.exercise-page-wrapper');

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
          favoriteExercises.exercises = validExercises;
          displayExercises();
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
function displayExercises(currentPage = 1) {
  // Ховаємо повідомлення про відсутність вправ
  notFoundContainer.style.display = 'none';
  const itemsPerPage = window.innerWidth >= 768 ? 10 : 8;
  // Відображаємо список вправ
  if (window.innerWidth < 1440) {
    exerciseList.innerHTML = exerciseCreateMarkup(favoriteExercises.exercises.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage), true);
    paginationWrapper.innerHTML = ''; // Очищаємо пагінацію
    const totalPages = Math.ceil(
      favoriteExercises.exercises.length / itemsPerPage
    );
    if (totalPages > 1) {

      renderPagination(
        paginationWrapper,
        currentPage,
        totalPages,
        handlePageClick
      );
    }
    return;
  }
  exerciseList.innerHTML = exerciseCreateMarkup(favoriteExercises.exercises, true);
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

function handlePageClick(event) {
  const page = Number(event.target.textContent);
  displayExercises(page)
  setupDeleteFavoriteCardListener()
}

export { renderFavoritesPage };
