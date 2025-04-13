import { renderExerciseModal } from '../partials_js/exercise-modal.js';
import { refs } from '../utils/refs.js';
import { showErrorToast, showSuccessToast } from '../utils/utils.js';
import { exerciseService } from '../services/services.js';

async function handleOpenExerciseModal(id) {
  try {
    const exercise = await exerciseService.getExerciseById(id);
    refs.exerciseModal.classList.add('is-open');

    const modal = renderExerciseModal(exercise);
    refs.exerciseModal.innerHTML = modal;
  } catch (error) {
    showErrorToast(error.message);
  }
}

function updateButtonsBlock(id) {
  const isInFavorites = localStorage.getItem('favorites')?.includes(id);

  const favBtn = isInFavorites
    ? `<button id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#trash"></use>
         </svg>
       </button>`
    : `<button id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#heart"></use>
         </svg>
       </button>`;

  const buttonContainer = document.querySelector(
    '.exercise-modal-buttons-block'
  );
  if (buttonContainer) {
    buttonContainer.innerHTML = `
      ${favBtn}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `;
  }
}

function handleToggleFavorite(id) {
  try {
    const favorites = localStorage.getItem('favorites');

    if (!favorites) {
      localStorage.setItem('favorites', JSON.stringify([id]));
      showSuccessToast('Exercise added to favorites!');
    } else {
      const favoritesArray = JSON.parse(favorites);
      if (!favoritesArray.includes(id)) {
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favoritesArray, id])
        );
        showSuccessToast('Exercise added to favorites!');
      } else {
        const updatedFavorites = favoritesArray.filter(favId => favId !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        showSuccessToast('Exercise removed from favorites!');
      }
    }

    updateButtonsBlock(id);
  } catch (error) {
    showErrorToast(error.message);
  }
}

export { handleOpenExerciseModal, handleToggleFavorite };
