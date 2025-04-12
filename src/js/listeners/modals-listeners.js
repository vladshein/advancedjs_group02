import { refs } from '../utils/refs.js';
import { renderGiveRatingModal } from '../partials_js/give-rating-modal.js';
import { formValidation } from '../utils/form-validation.js';
import { showErrorToast } from '../utils/utils.js';
import { exerciseService } from '../services/services.js';

function setupModalsListeners() {
  document.addEventListener('click', event => {
    if (refs.exerciseModal || refs.giveRatingModal) {
      // Close modals
      if (
        event.target === refs.exerciseModal ||
        event.target === refs.giveRatingModal ||
        event.target.closest('.close-modal-btn')
      ) {
        refs.exerciseModal.classList.remove('is-open');
        refs.giveRatingModal.classList.remove('is-open');
      }
      // Add to favorite
      if (event.target.closest('#add-to-favorites')) {
        handleAddFavorite(id);
      }
      // Open Give rating modal
      if (event.target.closest('#give-rating')) {
        refs.exerciseModal.classList.remove('is-open');
        refs.giveRatingModal.classList.add('is-open');

        const giveRatingModal = renderGiveRatingModal(id);
        refs.giveRatingModal.innerHTML = giveRatingModal;

        refs.ratingBlock = document.querySelector('.rating-modal-rating-block');
        refs.ratingDisplay = document.querySelector('.rating-modal-rating');
        initializeRatingBlockListener();
      }
    }
  });
}

function initializeRatingBlockListener() {
  refs.ratingBlock.addEventListener('change', event => {
    if (event.target.name === 'rating') {
      const ratingValue = parseInt(event.target.value, 10);

      refs.ratingDisplay.textContent = ratingValue.toFixed(1);

      const stars = refs.ratingBlock.querySelectorAll(
        '.rating-modal-rating-icon'
      );
      stars.forEach((star, index) => {
        if (index < ratingValue) {
          star.style.fill = 'rgba(var(--cl-orange))';
        } else {
          star.style.fill = 'rgba(var(--cl-lighthouse), 0.2)';
        }
      });
    }
  });
}

function setupOpenExerciseModalLister() {
  refs.openExerciseModalBtn.addEventListener('click', () => {
    handleOpenExerciseModal(id);
  });
}

function setupGiveRatingListener() {
  document.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.target;

    if (form.classList.contains('rating-modal-form')) {
      const formData = new FormData(form);

      const ratingSelected = form.querySelector('input[name="rating"]:checked');
      const email = formData.get('email');
      const comment = formData.get('comment');

      const isValid = formValidation(ratingSelected, email, comment);

      if (!isValid) {
        return;
      }

      const data = {
        rate: Number(ratingSelected.value),
        email: email,
        review: comment,
      };
      const id = form.dataset.id;
      console.log(data, id);

      try {
        const resp = await exerciseService.updateRating(id, data);
        console.log(resp);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || 'An unknown error occurred';
        console.error('Error while updating rating:', errorMessage);
        showErrorToast(errorMessage);
      }
    }
  });
}

export {
  setupModalsListeners,
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
};
