import { renderExerciseModal } from '../partials_js/exercise-modal.js';
import { refs } from '../utils/refs.js';
import { showErrorToast, showSuccessToast } from '../utils/utils.js';
import { exerciseService } from '../services/services.js';

async function handleOpenExerciseModal(id) {
  try {
    refs.exerciseModal.classList.add('is-open');
    refs.exerciseModal.innerHTML = `<div class="loader"></div>`;
    const exercise = await exerciseService.getExerciseById(id);

    const modal = renderExerciseModal(exercise);
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
        showErrorToast('Exercise already in favorites!');
      }
    }
  } catch (error) {
    showErrorToast(error.message);
  }
}

export { handleOpenExerciseModal, handleAddFavorite };
