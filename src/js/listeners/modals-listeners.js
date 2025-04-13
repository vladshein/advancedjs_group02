import { refs } from '../utils/refs.js';
import { renderGiveRatingModal } from '../partials_js/give-rating-modal.js';
import {
  formValidation,
  showSuccessToast,
  showErrorToast,
} from '../utils/utils.js';
import { exerciseService } from '../services/services.js';
import {
  handleToggleFavorite,
  handleOpenExerciseModal,
} from '../handlers/modals-handlers.js';

function setupModalsListeners() {
  document.addEventListener('click', event => {
    if (refs.exerciseModal.classList.contains('is-open')) {
      // Close modal
      if (
        event.target === refs.exerciseModal ||
        event.target.closest('.close-modal-btn')
      ) {
        refs.exerciseModal.classList.remove('is-open');
      }

      // Toggle favorites
      if (
        event.target.closest('#add-to-favorites') ||
        event.target.closest('#remove-from-favorites')
      ) {
        const id = event.target.closest('.exercise-modal-card').dataset.id;
        handleToggleFavorite(id);
      }

      // Open Give rating modal
      if (event.target.closest('#give-rating')) {
        refs.exerciseModal.classList.remove('is-open');
        refs.giveRatingModal.classList.add('is-open');

        const id = event.target.closest('.exercise-modal-card').dataset.id;

        const giveRatingModal = renderGiveRatingModal(id);
        refs.giveRatingModal.innerHTML = giveRatingModal;

        refs.ratingBlock = document.querySelector('.rating-modal-rating-block');
        refs.ratingDisplay = document.querySelector('.rating-modal-rating');
        initializeRatingBlockListener();
      }
    }

    if (refs.giveRatingModal.classList.contains('is-open')) {
      // Close modal
      if (
        event.target === refs.giveRatingModal ||
        event.target.closest('.close-modal-btn')
      ) {
        refs.giveRatingModal.classList.remove('is-open');
        refs.exerciseModal.classList.add('is-open');
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
  document.addEventListener('click', event => {
    if (event.target.closest('.exercise-header-button')) {
      const id = event.target.closest('.exercise-item').dataset.id;

      handleOpenExerciseModal(id);
    }
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

      try {
        await exerciseService.updateRating(id, data);
        refs.giveRatingModal.classList.remove('is-open');
        showSuccessToast('Rating submitted successfully!');
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || 'An unknown error occurred';
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
