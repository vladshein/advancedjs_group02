import { renderFavoritesPage } from '../partials_js/favorites.js';
import { handleDeleteFromFavorites } from '../handlers/favorites-handlers.js';

const setupDeleteFavoriteCardListener = () => {
  const deleteFavoriteCardButtons = document.querySelectorAll('.trash-can');

  deleteFavoriteCardButtons.forEach(button => {
    button.addEventListener('click', async event => {
      event.preventDefault();
      const id = event.target.closest('.exercise-item').dataset.id;

      await handleDeleteFromFavorites(id);
      renderFavoritesPage();
    });
  });
};

export { setupDeleteFavoriteCardListener };
