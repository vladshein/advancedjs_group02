import { loadCategories } from '../services/card-category.js';

function handleCardPageClick(event) {
  const page = Number(event.target.textContent);
  loadCategories(page);
}

export { handleCardPageClick };
