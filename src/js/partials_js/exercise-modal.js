import { refs } from '../utils/refs.js';
import { exerciseService } from '../services/services.js';
import { showErrorToast } from '../utils/utils.js';

// Delete this line when you get the id from the event
const id = '64f389465ae26083f39b17a4';

function renderModal({
  id,
  name,
  target,
  bodyPart,
  popularity,
  time,
  burnedCalories,
  rating,
  description,
  gifUrl,
  equipment,
}) {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isRated = index < Math.floor(rating);
    const ratedClass = isRated ? 'rated' : '';
    return `<svg class="exercise-modal-rating-icon ${ratedClass}">
              <use href="./images/icons.svg#star"></use>
            </svg>`;
  }).join('');

  return `<div class="container">
    <div data-id=${id} class="modal exercise-modal-card">
      <button class="close-exercise-modal-btn">
        <svg class="close-exercise-modal-icon">
          <use href="./images/icons.svg#close"></use>
        </svg>
      </button>
      <div class="exercise-gif-wrapper">
        <img
          class="exercise-gif"
          src=${gifUrl}
          alt="alt text from backend here"
        />
      </div>
      <div class="exercise-modal-overview">
        <div>
          <h2 class="exercise-modal-title">${name}</h2>
          <div class="exercise-modal-rating-block">
            <p class="exercise-modal-rating">${rating}</p>
            ${stars}
          </div>
        </div>
        <div class="exercise-modal-info-block">
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Target</p>
            <p class="exercise-modal-info-descr">${target}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Body Part</p>
            <p class="exercise-modal-info-descr">${bodyPart}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Equipment</p>
            <p class="exercise-modal-info-descr">${equipment}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Popular</p>
            <p class="exercise-modal-info-descr">${popularity}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Burned Calories</p>
            <p class="exercise-modal-info-descr">${burnedCalories}/${time} min</p>
          </div>
        </div>
        <div class="exercise-modal-descr">${description}</div>
        <div class="exercise-modal-buttons-block">
          <button id="add-to-favorites" class="btn btn-primary">
            Add to favorites
            <svg class="exercise-modal-btn-icon">
              <use href="./images/icons.svg#heart"></use>
            </svg>
          </button>
          <button class="btn btn-secondary">Give a rating</button>
        </div>
      </div>
    </div>
    </div>`;
}

// Handlers

async function handleOpenExerciseModal(id) {
  try {
    const exercise = await exerciseService.getExerciseById(id);
    refs.exerciseModal.classList.add('is-open');

    const modal = renderModal(exercise);
    refs.exerciseModal.innerHTML = modal;
  } catch (error) {
    showErrorToast(error.message);
  }
}

function handleAddFavorite(id) {
  try {
    const favorites = localStorage.getItem('favorites');

    if (!favorites) {
      localStorage.setItem('favorites', JSON.stringify([id]));
    } else {
      const favoritesArray = JSON.parse(favorites);
      if (!favoritesArray.includes(id)) {
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favoritesArray, id])
        );
      }
    }
  } catch (error) {
    showErrorToast(error.message);
  }
}

// Event listeners

refs.openExerciseModalBtn.addEventListener('click', event => {
  handleOpenExerciseModal(id);
});

document.addEventListener('click', event => {
  if (refs.exerciseModal) {
    if (
      event.target === refs.exerciseModal ||
      event.target.closest('.close-exercise-modal-btn')
    ) {
      refs.exerciseModal.classList.remove('is-open');
    }
    if (event.target.closest('#add-to-favorites')) {
      handleAddFavorite(id);
    }
  }
});

export { handleOpenExerciseModal, handleAddFavorite };
